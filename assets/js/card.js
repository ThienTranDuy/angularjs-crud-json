app.controller("cardController", function($scope, $http){

  // prop
  $scope.prop="name";
  $scope.sortBy = function (prop){
    $scope.prop = prop;
  }

  // Math pagination
  $scope.begin = 0;
  $scope.products = [];
  $http.get('data/Product.js').then(function(response){        
    $scope.products = response.data;
    $scope.pageCount = Math.ceil($scope.products.length / 8);
  });

  // pagination
  $scope.first = function(){
    $scope.begin=0;
  }
  $scope.prev = function(){
    if($scope.begin > 0){
      $scope.begin -= 8;
    }
  }
  $scope.next = function(){
    if($scope.begin<($scope.pageCount - 1)*8){
      $scope.begin += 8;
    }
  }
  $scope.last = function(){
    $scope.begin=($scope.pageCount - 1)*8;
  }
});
app.filter('percentage', ['$filter', function ($filter) {
return function (input, decimals) {
  return $filter('number')(input * 100, decimals) + '%';
};
}]);
