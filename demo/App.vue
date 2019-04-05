<template>
  <div>
    <!-- <be-grid :options="options" :dataSource="people"></be-grid> -->
    <be-datepicker v-model="dob" :options="{ todayHighlight: true }"></be-datepicker>
    {{dob}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  options = {
    columns: [
      { field: "fName", title: "First Name", sortable: true },
      { field: "lName", title: "Last Name" }
    ],
    search: true
  };

  people = [{ fName: "Jovana", lName: "Bajsanski" }];

  onRowClicked(row: any) {
    console.log(row);

    this.people = [{ fName: "Zeljko", lName: "Bajsanski" }];
  }

  dob = null;
}
</script>