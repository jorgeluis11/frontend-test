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
        

            //Randomize words
            var words =  [
                    {"word": "pen",
                    "image": "assets/images/pen.png"
                    }, 
                    {"word": "blue",
                    "image": "assets/images/blue.png"
                    },
                    {"word": "to walk",
                    "image": "assets/images/to_walk.png"
                    }
                ]
            var wordsRandomList = []
            words.map(function(item){
                wordsRandomList.push(item.word);
                wordsRandomList.push(item.image);
            });

            for (var i = wordsRandomList.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = wordsRandomList[i];
                wordsRandomList[i] = wordsRandomList[j];
                wordsRandomList[j] = temp;
            }

            return wordsRandomList;
        }

        
    }
});