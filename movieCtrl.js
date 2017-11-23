
app.controller("movieCtrl", function ($scope, $http,Movie) {
  $scope.movies=[];
  $http.get("movie.json").then(function mySuccess(response) {
    $scope.movies=[];
    for (var i = 0; i < response.data.length; i++) {
      $scope.movies.push(new Movie(response.data[i].name, response.data[i].time, 
        response.data[i].director, response.data[i].actors,response.data[i].link))  
    }
    //alert("success" + JSON.stringify(response.status));
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  })
  
        });
