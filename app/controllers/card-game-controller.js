angular.module("starter")
.controller("cardGame", function($scope, WordService){
    //Ajax call to get all the words
    $scope.words = WordService.get();

    $scope.selectedIndex;

    $scope.cardSelected = function(index){
        $scope.selectedIndex = index;
        console.log(index);
    }

    $scope.imageOrWord = function(word){
        if(word.endsWith(".png"))
            return true;
        else
            return false;
    }
});