class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       // this.sling1 = loadImage("sprites/sling1.png");
        //this.sling2 = loadImage("sprites/sling2.png");
        //this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = 0;
    }

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //strokeWeight(7);
            //stroke(48, 22, 8);

            //if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
               // line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            //}
            //else{
                //strokeWeight(3);
                //line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                //line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            //}
            pop();
        
    }
    
}