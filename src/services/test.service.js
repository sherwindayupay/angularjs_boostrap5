import angular from "angular";

export default angular
  .module("ngApp.service.test", [])
  .service("TestService", TestService).name;

TestService.$inject = ["NAME"];

function TestService(NAME) {
  const services = {
    getMyName,
  };

  return services;
  function getMyName() {
    return NAME;
  }
}
