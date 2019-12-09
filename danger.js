 class danger extends platform {
        constructor(dCol) {
        super()
        this.x = 200
        this.y = 200
        this.vx = 0
        this.vy = 0
        this.width = 150
        this.height = 25
        this.color = dCol
    }
          //@Override   
         changeState() {
        let c = 0
            if(bgCol == "black"){
            c = 0
        }

            if(bgCol == "red"){
            c = 2
        }
            if(bgCol == "green"){
            c = 1
        }
            if(bgCol == "white"){
            c = 0
        }
        let colorList = []
        colorList.push("red", "magenta", "red")
        
        this.color = colorList[c]  
    }  
    }