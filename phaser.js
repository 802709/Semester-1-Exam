 class Phaser extends platform {
        constructor(phCol) {
        super()
        this.x = 500
        this.y = 500
        this.width = 50
        this.height = 50
        this.color = "cyan"
    }  
        changeState(p) {
        let c = 0
        if(p.col == "cyan"){
            c = 5
        }
            else if(bgCol == "black"){
            c = 0
        }
            else if(bgCol == "red"){
            c = 2
        }
           else if(bgCol == "green"){
            c = 3
        }
            else if(bgCol == "white"){
            c = 4
        }
        let colorList = []
        colorList.push("black", "green", "white", "cyan")
        
        this.color = colorList[c]  
    }   
    }