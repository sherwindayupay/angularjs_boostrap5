import angular from "angular";

export default angular
  .module("ngApp.directives.test", [])
  .directive("boldText", BoldText).name;

function BoldText() {
  return {
    restrict: "A",
    link: function (scope, element) {
      element.css("font-weight", "bold");
    },
  };
}
