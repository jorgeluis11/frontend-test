angular.module("starter")
.controller("cardGame", function($scope, WordService, SweetAlert){
   
    //This is a ajax call to get all the words
    $scope.words = WordService.get();
    
    //Variable that store the selected card index
    $scope.selectedIndex;

    //Keep a counter of how many of the card the user clicked successful
    $scope.score = 0;

    $scope.cardSelected = function(index)
    {
        //If there are no selected card, store the one that was clicked
        if($scope.selectedIndex == undefined)
            $scope.selectedIndex = index;

        //If the card that was selected and the one that is was clicked has the same index, unselect the cards
        else if($scope.selectedIndex === index)
            $scope.selectedIndex = undefined;

        //If the card selectedIndex and the one that was click are not the same then procced to this if
        else if($scope.selectedIndex !== index)
        {
            //Get the card name and eliminate anything from the image url
            var word1 = $scope.words[$scope.selectedIndex].replace(/(assets\/images\/)|(\.png)|\_| /g,"");
            var word2 = $scope.words[index].replace(/(assets\/images\/)|(\.png)|\_| /g,"");
            
            //Compare the two names if they are the same get to this if
            if(word1 === word2){
                $scope.score++;
                
                //hide the card because it has an ng-show="emptyString"
                $scope.words[$scope.selectedIndex] = "";
                $scope.words[index] = "";
                $scope.selectedIndex = undefined;
             
                //Show success message
                if($scope.words.length === ($scope.score * 2)){
                    SweetAlert.swal({   
                        title: "Great Job!",  
                        confirmButtonText: "Play Again", 
                        type: "success", 
                        showConfirmButton: true 
                    },function(){   
                        $scope.words = WordService.get();
                    });

                    $scope.score = 0;

                    return;
                }else{
                    SweetAlert.swal({   
                        title: "Nice Job!",  
                        type: "success", 
                        timer: 1800,   
                        showConfirmButton: false });
                }
                
            }
            //If the selection fail and they are not the same it should show an error message and unselect the cards
            else
            {
                SweetAlert.swal({   
                    title: "Sorry Try Again.",  
                    type: "error", 
                    timer: 1800,   
                    showConfirmButton: false });
                $scope.selectedIndex = undefined;
            }


            

            
        }
    }

    //A function to decide if the html is going to show an image or a simple text.
    $scope.imageOrWord = function(word){
        if(word.endsWith(".png"))
            return true;
        else
            return false;
    }
});