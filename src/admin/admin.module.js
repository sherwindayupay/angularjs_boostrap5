import angular from "angular";
import AdminComponent from "./admin.component";

export default angular
  .module("ngApp.admin", [])
  .component("admin", AdminComponent).name;
