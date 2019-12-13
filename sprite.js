class sprite{
  constructor(c){
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = 35;
    this.height = 35;
    this.color = c;
    this.SPEED = 4;
    this.active = true;
    this.onScreen = false;
    
  }
    draw() {
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height); 
    }
  
  die(){
   this.active = false 
    this.onScreen = false
    this.x = 3000
    this.y = 3000
  }
  
  
    move(dx, dy) {
    this.vx = dx * this.SPEED
    this.vy = dy * this.SPEED
  }
  
  
  update() {

    this.x += this.vx
    this.y += this.vy
    
     if (this.x < -70 || this.x > width + 70){
       this.onScreen = false
         this.die()
  }
     if (this.y < -70 || this.y > height + 70){
       this.onScreen = false
         this.die()
     }
  }
    
  
  
  stop() {
    this.vx = 0
    this.vy = 0
  }
  
  wallCols(s){
    if (s.x > width){
    s.x = (s.vx * -1)
      s.x  = width - 1
       
    }
    if (s.x < 0){
      s.x = (s.vx * 1)
      s.x  = 1
    }
    if (s.y > height){
    s.y = (s.vy * -1)
      s.y  = height -1
    }
    if (s.y < -50){
      s.die()
    }
  }
  
  
}