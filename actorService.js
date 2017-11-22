app.factory("Actor", function() {
    
 
 // Actor Constructorת
   function ActorConstructor(first, last, img, link) {
    this.first = first;
    this.last = last;
    this.img = img;
    this.link = link;
}

return ActorConstructor;
})