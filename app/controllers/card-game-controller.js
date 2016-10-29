angular.module("starter")
.controller("cardGame", function($scope, WordService, SweetAlert){
    //Ajax call to get all the words
    $scope.words = WordService.get();

    $scope.selectedIndex;

    $scope.cardSelected = function(index)
    {
        if($scope.selectedIndex == undefined)
            $scope.selectedIndex = index;
        else if($scope.selectedIndex === index)
            $scope.selectedIndex = undefined;
        else if($scope.selectedIndex !== index)
        {
            var word1 = $scope.words[$scope.selectedIndex].replace(/(assets\/images\/)|(\.png)|\_| /g,"");
            var word2 = $scope.words[index].replace(/(assets\/images\/)|(\.png)|\_| /g,"");
            if(word1 === word2){
                $scope.words[$scope.selectedIndex] = "";
                $scope.words[index] = "";
                $scope.selectedIndex = undefined;
                SweetAlert.swal({   
                    title: "Good Job!",  
                    type: "success", 
                    // text: "Good Job!",   
                    timer: 2000,   
                    showConfirmButton: false });
            }else{
                SweetAlert.swal({   
                    title: "Sorry Try Again.",  
                    type: "error", 
                    // text: "Good Job!",   
                    timer: 2000,   
                    showConfirmButton: false });
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