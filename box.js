class Box{
    constructor(x,y){
        var options = {
            density:0.0000001
        }
        this.body = Bodies.rectangle(x,y,30,30,options);
       // width = 30;
        //height = 30;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rect(0,0,30,30);
        pop();
    }
}