class log {
    constructor(x,y,height,angle){
    var options = {
        restitution:0.8,
        friction:2,
        density:1,
    
    }
    this.body= Bodies.rectangle(x,y,20,height,options)
    this.width=20
    this.height=height
   Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    
    }
    display (){
    push();
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(4)
    stroke("green")
    fill("white")
    rect(0,0,this.width,this.height)
    pop();
    }
    
    
    }