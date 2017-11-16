
app.controller("actorCtrl", function($scope) {
    
    // Car Constructor
    function Actor(first, last, img, link) {
        this.first = first;
        this.last = last;
        this.img = img;
        this.link =link;
    }  
     $scope.actors = [
        new Actor("Nikol", 
        "kidman",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjM5NDg4MF5BMl5BanBnXkFtZTcwNDg1OTQ4Nw@@._V1_UY317_CR10,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000173/"),
        new Actor("Julia", 
        "Roberts",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000210/"),
        new Actor("Meg", 
        "Ryan",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzOTI0NzI3OV5BMl5BanBnXkFtZTgwODIyMzUzMDI@._V1_UY317_CR1,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000212/?ref_=tt_cl_t1"),
        new Actor("Jennifer", 
        "Aniston",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000098/"),
        new Actor("Jennifer", 
        "Lopez",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_UY317_CR32,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000182/"),
        new Actor("Jennifer", 
        "Garner",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTA4MDgzMTc1Nl5BMl5BanBnXkFtZTcwNjQyMjIwNQ@@._V1_UY317_CR14,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0004950/")
    
    ];

    $scope.order =  function() {
        $scope.orderProp="first";
    }
    
  
    });