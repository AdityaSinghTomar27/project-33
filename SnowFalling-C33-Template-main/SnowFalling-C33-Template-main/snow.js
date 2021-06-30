class snow {
    constructor(x,y) {
        var options = { 
            isStatic : false

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("snow4.webp");

        World.add(world,this.body);
        
    }
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
        //rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}