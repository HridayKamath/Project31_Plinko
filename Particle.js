class Particle {
    constructor(x,y,radius) {
      var options = {
          'isStatic' :false,
          'restitution':0.2,
          'friction':10.3,
          'density':1.2,
         
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.stroke = this.color
      this.width = 50;
      this.height = 50;
      this.radius = 10;
    
      
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      fill(this.color);
      stroke(this.stroke);
      circle(0, 0, this.radius);
      
      pop();
    }
  };

  
