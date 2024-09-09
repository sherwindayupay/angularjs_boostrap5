import angular from "angular";

export default angular
  .module("ngApp.filter.test", [])
  .filter("test", TestFilter).name;

function TestFilter() {
  return function (input) {
    return input.toUpperCase();
  };
}
