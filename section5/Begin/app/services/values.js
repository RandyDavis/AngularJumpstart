// Value is NOT injectable into config
angular.module('customersApp').value('appSettings', {
  title: 'Customers Application',
  version: 1.0
});

// Constant is injectable into config
// angular.module('customersApp').constant('appSettings', {
//   title: 'Customers Application',
//   version: 1.0
// });