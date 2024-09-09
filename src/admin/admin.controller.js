AdminController.$inject = ["TestService"];

export default function AdminController(TestService) {
  const vm = this;
  vm.message = "Welcome to Bootstrap 5 " + TestService.getMyName();
}
