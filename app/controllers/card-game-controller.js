angular.module("starter")
.controller("cardGame", function($scope, WordService){
    //Ajax call to get all the words
    $scope.words = WordService.get();

    $scope.selectedIndex;

    $scope.cardSelected = function(index)
    {
        console.log(index);
        console.log($scope.selectedIndex);
        if($scope.selectedIndex == undefined)
            $scope.selectedIndex = index;
        else if($scope.selectedIndex === index)
            $scope.selectedIndex = undefined;
        else if($scope.selectedIndex !== index)
        {
            var word1 = $scope.words[$scope.selectedIndex].replace(/(assets\/images\/)|(\.png)|\_| /g,"");
            var word2 = $scope.words[index].replace(/(assets\/images\/)|(\.png)|\_| /g,"");
            console.log(word1);
            console.log(word2);
            if(word1 === word2){
                $scope.words[$scope.selectedIndex] = "";
                $scope.words[index] = "";
                $scope.selectedIndex = undefined;
            }else{
                $scope.selectedIndex = undefined;
            }
        }
    }

    $scope.imageOrWord = function(word){
        if(word.endsWith(".png"))
            return true;
        else
            return false;
    }
});