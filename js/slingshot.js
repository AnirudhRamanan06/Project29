class SlingShot{
    constructor(Hexagon,pointB){
        var options = {
            Hexagon: bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length: 10
        }
       this.pointB = pointB;
        this.chain = Constraint.create(options);
        Hexagon=Bodies.circle(50,200,20);
        imageMode(CENTER)
        image(Hexagon_Img,Hexagon.position.x,Hexagon.position.y,40,48);
        World.add(world,Hexagon)

        World.add(world, this.chain);
    }
    fly() {
        this.chain.bodyA=null;
    }

    display(){
        if(this.chain.bodyA){
            
        
        var pointA = this.chain.Hexagon.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
   
}

    
