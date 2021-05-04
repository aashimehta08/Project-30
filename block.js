class Block{
    constructor(x, y, width, height) {
        var options = {
             isStatic : false,
             restitution : 0,
             friction : 1,
             density : 0.5       
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed < 3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0);
        pop();
        }
        else {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          image(this.image,pos.x, pos.y);
          pop();
        }
      }
}
