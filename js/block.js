class Block  {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
      super(x,y,width,height);
      this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        world.add(world,this.body);
    }
    
   

   display(){
    // var angle = this.body.angle;
     push();
     translate(this.body.position.x, this.body.position.y);
     //rotate(angle);
     //imageMode(CENTER);
     pop();
     }
  };
  
        
        
      
      