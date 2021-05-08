class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            stiffness : 0.04,
            bodyA:bodyA,
            pointB:pointB
        }

    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }
 
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.slingshot.bodyA = body;
         }
     
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(3);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }}