angular.module("starter")
.controller("cardGame", function($scope, WordService){
    $scope.title = "Card Game";

    //Ajax call to get all the words
    $scope.words = WordService.get();



});