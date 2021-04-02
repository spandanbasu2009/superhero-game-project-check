class Hero{
    constructor(x,y,r){
       var options = {
           density:1,
           frictionAir:1
       };

       this.x = x;
       this.y = y;
       this.r = r;
       this.image = loadImage("superhero.jpg");
       this.body = Bodies.circle(this.x,this.y,this.r,options)
       World.add(world,this.body);
    }

    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
    }
}