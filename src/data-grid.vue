<template>
  <table ref="table"></table>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";
import $ from "jquery";

@Component({})
export default class DataGrid extends Vue {
  @Prop({ default: () => {} }) options!: any;
  @Prop({ default: () => [] }) dataSource!: any[] | (() => Promise<any[]>);

  @Emit("rowClicked") onRowClicked(row: any) {}

  @Watch("dataSource")
  onDataSourceChanged(newDataSource: any[]) {
    this.executeMethod("load", newDataSource);
  }

  private $table: JQuery | null = null;

  async mounted() {
    const opts = {
      ...this.options,
      onClickRow: (row: any) => this.onRowClicked(row)
    };

    if (typeof this.dataSource === "object") {
      opts.data = this.dataSource;
      this.$table = ($(this.$refs.table)).bootstrapTable(opts);
    } else if (typeof this.dataSource === "function") {
      this.$table = ($(this.$refs.table)).bootstrapTable(opts);
      this.executeMethod("showLoading");
      const data = await this.dataSource();
      this.executeMethod("load", data);
      this.executeMethod("hideLoading");
    }
  }

  private executeMethod(methodName: string, argument?: any) {
    if (this.$table) {
      (this.$table).bootstrapTable(methodName, argument);
    }
  }
}
</script>

<style scoped>
table {
  cursor: pointer;
}
</style>
