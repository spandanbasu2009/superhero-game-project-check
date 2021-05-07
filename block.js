class Block{
    constructor(x,y){
        var options={
            isStatic:false,
            density:0.5,
            restitution:0.01,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        stroke("black");
        fill("green");
        strokeWeight(4);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();
    }
}