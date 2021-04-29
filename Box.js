class Box{
    constructor(x,y,w,h){
        var box_options ={
            isStatic: false,
            restitution:0.1,
            friction:0.9
        }
        
        this.box = Bodies.rectangle(x,y,w,h,box_options);
        this.w=w;
        this.h=h;
        World.add(world,this.box); 
    }
    display(){
        rectMode(CENTER);
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        rect(0,0,this.w,this.h);
        pop()   
    }
}