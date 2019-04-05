import { PluginFunction } from "vue";
import Dropdown from "./dropdown.vue";
import DataGrid from "./data-grid.vue";
import DatePicker from './datepicker.vue';

const plugin: PluginFunction<{}> = vue => {
  vue.component("be-dropdown", Dropdown);
  vue.component("be-grid", DataGrid);
  vue.component("be-datepicker", DatePicker);
};

export default plugin;
