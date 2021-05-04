class Polygon{
    constructor(x,y,r){
     var options = {
         setStatic: false,
         restitution: 0.5,
         friction : 1,
         density: 1
     }
    this.x = x;
    this.y = y;
    this.radius = r;
    this.body = Bodies.circle(x,y,r,options);
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
}
display(){
 var angle = this.body.angle
 var pos = this.body.position;
 push();
 translate(pos.x,pos.y);
 rotate(angle);
 imageMode(CENTER);
 image(this.image,0,0,40,40);
 pop();
}
}