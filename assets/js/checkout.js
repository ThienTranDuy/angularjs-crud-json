app.controller("checkoutController", function($scope){
  $scope.products=[
    {
      "ProductId": "Prod01",
      "Img": "./assets/img/Desktop-01.jpg",
      "Name": "Laptop Dell",
      "Price": 1500,
      "Quality": "4"
    },
    {
        "ProductId": "Prod02",
        "Img": "./assets/img/Desktop-01.jpg",
        "Name": "Laptop Dell",
        "Price": 5000,
        "Quality": "2"
    },
    {
        "ProductId": "Prod03",
        "Img": "./assets/img/Desktop-01.jpg",
        "Name": "Laptop Dell",
        "Price": 3000,
        "Quality": "5"
    }
  ];
  $scope.getTotal = function(){
    var amount = 0;
    for (var i = 0; i < $scope.products.length; i++){
      if($scope.products[i].buy){
        amount += $scope.products[i].Price * $scope.products[i].Quality;
      }
    }
    return amount;
  }
});