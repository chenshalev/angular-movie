
app.controller("movieCtrl", function ($scope, $http,Movie) {
    
           $http.get("movie.json").then(function mySuccess(response) {
            $scope.movies=response.data;
        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
          })
      
        });