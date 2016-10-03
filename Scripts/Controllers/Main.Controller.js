/// <reference path="../angular.js" />


angular.module("mainModule")
        .controller("MainController", [
            "$scope",
            "$route",
            "$location",

            function ($scope, $route, $location) {
                $scope.$route = $route;
                $scope.products = [];
                $scope.cartProducts = [];

                $scope.addToCart = function (product) {
                    $scope.cartProducts.push(product);
                    //var index = $scope.cartProducts.indexOf(product);
                    for (i = 0; i < $scope.cartProducts.length; i++) {
                        $scope.amount = i + 1;
                    }
                    $scope.saveProducts();
                }


                $scope.saveProducts = function () {
                    var jsonString = JSON.stringify($scope.products);
                    localStorage.setItem("Products", jsonString);
                }

                $scope.loadProducts = function () {
                    var dataString = localStorage.getItem("Products");

                    if (dataString)
                        $scope.products = JSON.parse(dataString);
                }


                $scope.go = function (url) {
                    $location.path(url);
                }

                $scope.loadProducts();
            }
        ]);