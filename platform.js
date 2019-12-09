class platform extends sprite {
        constructor(pCol) {
        super()
        this.x = 100
        this.y = 100
        this.width = 100
        this.height = 25
        //this.img = loadImage(imgURL)
        this.active = true
        this.color = pCol
    }
        draw() {
        fill(this.x, this.y, this.width, this.height, this.color)
    }   
        
        changeState() {
        let c = 0
            if(bgCol == "black"){
            c = 0
        }
            if(bgCol == "red"){
            c = 2
        }
            if(bgCol == "green"){
            c = 3
        }
            if(bgCol == "white"){
            c = 4
        }
        let colorList = []
        colorList.push("black", "red", "green", "white")
        
        this.color = colorList[c]
    }  
 }