<template>
  <div class="input-group date" ref="control">
    <input type="text" class="form-control">
    <span class="input-group-addon">
      <span class="glyphicon glyphicon-calendar"></span>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";
import jQuery from "jquery";

@Component({})
export default class DatePicker extends Vue {
  @Prop({ default: () => {} }) options!: any;
  @Prop({ default: "dd.mm.yyyy" }) format!: string;
  @Prop() value!: string | Date;
  @Emit("input") onDateChaged(date: Date) {}

  $date: JQuery | null = null;

  mounted() {
    const options = {
      ...this.options,
      ...{ format: this.format },
      autoclose: true
    };
    this.$date = jQuery(this.$refs.control).datepicker(options);
    if (this.$date) {
      this.$date.datepicker().on("changeDate", e => {
        this.onDateChaged(e.date);
      });
    }

    if (this.value && this.$date) {
      this.$date.datepicker("setDate", this.value);
    }
  }
}
</script>