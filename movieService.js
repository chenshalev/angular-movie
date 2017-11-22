app.factory("Movie", function() {
    // Movie Constructor
     function MovieConstructor(name, time, director,actors, link) {
        this.name = name;
        this.time = time;
        this.director = director;
        this.actors = actors;
        this.link = link;
    }
return MovieConstructor;
})
