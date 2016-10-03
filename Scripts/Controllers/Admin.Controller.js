/// <reference path="../angular.js" />


angular.module("mainModule")
        .controller("AdminController", [
            "$scope",

        function ($scope) {
            $scope.title = "Add - Delete and Edit for Admin User";
            $scope.newProduct = {
                title: "",
                body: "",
                comments: []
            };

            $scope.addProduct = function () {
                // Two ways to set a more or less unique id on the new post
                //$scope.newPost.id = $scope.posts[$scope.posts.length - 1].id + 1
                $scope.newProduct.id = Date.now();
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};
                $scope.saveProducts();
                $("#newProductModal").modal("hide");
            }

            $scope.remove = function (index) {
                $scope.products.splice(index, 1);

                $scope.saveProducts();
            }
            
            
        }
        ]);