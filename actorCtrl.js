
app.controller("actorCtrl", function ($scope, $http) {

    // Car Constructor
    function Actor(first, last, img, link) {
        this.first = first;
        this.last = last;
        this.img = img;
        this.link = link;
    }

    $http.get("actors.json").then(function mySuccess(response) {
        $scope.actors=response.data;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
    $scope.order = function () {
            $scope.orderProp = "first";
        }
    
  
    });