/// <reference path="../angular.js" />


angular.module("mainModule")
        .controller("CartController", [
            "$scope",

            function ($scope) {
                $scope.title = "Shopping Cart";


                $scope.removeProductCart = function (index) {
                    $scope.products.splice(index, 1);
                }

            }
        ]);