 class Paperball {
    constructor(x,y,r){
 var options={
    'isStatic':false,
    'restitution':0.8,
    'friction':1,
    'density':1
     
 }
 this.x=x;
 this.y=y;
    
 this.body= Bodies.circle(this.x,this.y,PI/2,options);
 World.add(myWorld,this.body)
    }
 display(){
    var paperpos = this.body.position;
    
    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER);
    strokeWeight(3)
    fill(255,0,255)
    ellipse(0,0,PI);
    pop()
}

}