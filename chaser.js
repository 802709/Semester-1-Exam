  class chaser extends platform {
        constructor(chCol) {
        super()
        this.x = 500
        this.y = 500
        this.vx = 0
        this.vy = 0
        this.width = 50
        this.height = 50
        this.color = chCol
        this.SPEED = 3
    }
        update(){
        this.x += this.vx
        this.y += this.vy
        }
        chase(p){
           if(p.x > this.x){
               this.vx = 1 * SPEED
           }
            if(p.y > this.y){
               this.vy = 1 * SPEED
           }
            if(p.x < this.x){
               this.vx = -1 * SPEED
           }
            if(p.y < this.y){
               this.vy = -1 * SPEED
           }
            else if(p.x == this.x){
                this.vx =0
            }
            else if(p.y == this.y){
                this.vy =0
            }
        }
         //@Override   
         changeState() {
        let c = 0
            if(bgCol == "black"){
            c = 0
        }
            if(bgCol == "red"){
            c = 1
        }
            if(bgCol == "green"){
            c = 2
        }
            if(bgCol == "white"){
            c = 0
        }
        let colorList = []
        colorList.push("green", "yellow", "green")
        
        this.color = colorList[c]  
    }   
    }