class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 250
        }
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
        
    }

    

    display(){
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(0);
            stroke(48, 22, 8);
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //strokeWeight(4);            
            pop();
        
    }
    
}