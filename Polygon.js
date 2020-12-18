class Polygon {
    constructor(x,y,r){
      var options = {
     // isStatic : false
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      
      }
      this.x=x;
      this.y=y;
      this.r=r
     this.body = Bodies.circle(this.x,this.y,this.r/2,options)
     this.image = loadImage("polygon.png")
     World.add(world,this.body);
     }
     display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      image(this.image,0,0,this.radius)
      pop();
     }
 }