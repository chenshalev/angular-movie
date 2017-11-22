app.factory("Movie", function(convert) {
    // Movie Constructor
     function MovieConstructor(name, time, director,actors, link) {
        this.name = name;
        this.time = time;
        this.hours = convert.hours(this.time);
        this.director = director;
        this.actors = actors;
        this.link = link;
    }
return MovieConstructor;
})
