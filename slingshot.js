class Slingshot{
    constructor(A,pointB){
     var options = {
     bodyA : A,
     pointB : pointB,
     stiffness : 0.08,
     length : 10,
     }
     this.pointB = pointB;
     this.sling = Constraint.create(options);
     World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("green");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}