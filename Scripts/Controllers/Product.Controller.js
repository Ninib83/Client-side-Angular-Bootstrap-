/// <reference path="../angular.js" />


angular.module("mainModule")
    .controller("ProductController", [
        "$scope",
        "$routeParams",

        function ($scope, $routeParams) {
            $scope.newComment = {};
            $scope.title = " Edit Product";
            $scope.edit = "Edit Form";
            $scope.product = $scope.products.filter(function (product) {
                return product.id == $routeParams.id;
            })[0];

            $scope.editing = false;

            $scope.editProduct = function (product) {
                $scope.current = product;
                $scope.editing = true;
                $scope.saveProducts();
            }
            $scope.save = function () {
                $scope.current = {};
                $scope.editing = false;
                $scope.saveProducts();
            }

            //$scope.addComment = function () {
            //    $scope.product.comments.push($scope.newComment);
            //    $scope.newComment = {};

            //    $scope.saveProducts();


            //}
        }
    ]);