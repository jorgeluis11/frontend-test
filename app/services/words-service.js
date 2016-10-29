angular.module("starter")
.factory('WordService', function($http) {
    return {
        get: function() {
        //This should call an http and then return the json needed.
        // It can't be user locally because of Cross origin requests are not allowed'
        // return $http.get('./words.json')
        //         .success(function(result) {
        //                 console.log(result);
        //             });
        // }
            return [
                {"word": "pen",
                    "image": "images/pen.png"
                }, 
                {"word": "blue",
                    "image": "images/blue.png"
                },
                {"word": "to walk",
                    "image": "images/walk.png"
                }
            ]
        }
    }
});