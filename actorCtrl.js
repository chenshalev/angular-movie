
app.controller("actorCtrl", function ($scope) {

    // Car Constructor
    function Actor(first, last, img, link) {
        this.first = first;
        this.last = last;
        this.img = img;
        this.link = link;
    }
    $scope.actors = [];

    $http.get("actors.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.actors.push(new Actor(response.data[i].first, response.data[i].last,
                response.data[i].img, response.data[i].link))
        }
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
    
    
    $scope.order = function () {
            $scope.orderProp = "first";
        }
    
  
    });