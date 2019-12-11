class Player extends sprite {
    constructor(plCol) {
        super()
        this.x = 0
        this.y = 0
        this.vx = 0
        this.vy = 0
        this.width = 50
        this.height = 50
        this.SPEED = 5
        //this.img = loadImage(imgURL)
        this.active = true
        this.color = plCol
    }
    
    draw() {
        fill( this.x, this.y, this.width, this.height, this.color)
    }
    
    update() {
        this.x += this.vx
        this.y += this.vy
    }
    die(){
         this.active = false
         deathcount += 1
     }
    changeState() {
        let c = 0
        if (keyCode === 'z'){
        c += 1
    }
        let colorList = []
        colorList.push("black", "red", "white", "cyan")
        if (c > colorList.length){
        c = 0
    } 
        this.color = colorList[c]  
    }
   
}
  