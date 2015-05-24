// current syntax in view file is --- ng-controller="CustomersController"
function CustomersController($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    
    $scope.customers = [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99}, {joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];
    $scope.doSort = function(propName) {
        $scope.sortBy= propName;
        $scope.reverse=!$scope.reverse;
    };
}

// Alternative syntax to use "controller as" in view file
// function CustomersController($scope) {
//   $scope.sortBy = 'name';
//   $scope.reverse = false;

//   this.customers = [
//     {joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956},
//     {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},
//     {joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99},
//     {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}
//   ];

//   $scope.doSort = function(propName) {
//       $scope.sortBy= propName;
//       $scope.reverse=!$scope.reverse;
//   };
// }