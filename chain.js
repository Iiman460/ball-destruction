class Chain{
    constructor(a,b){
        
        var options = {
            bodyA:a,
            pointB:b,
            stiffness: 0.01,
            length: 400
        }
        this.pointB = b;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pos = this.rope.bodyA.position;
       var pos2 = this.pointB;
       
       line(pos.x,pos.y,pos2.x,pos2.y);
    }
}