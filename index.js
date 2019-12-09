var p
var platforms = []
var dangers = []
var chasers = []
var phasers = []
var checkpoints = []

var grav = 1.5
var arc

//var stage = {
//    platforms: [],
//    chasers:[],
//    dangers:[],
//    checkpoint: var,
//    
//}
//var archive = [stage]
    
var assets = {
    images: {},
    sprites: []
}

var deathcount = 0
var lvlcount = 1


var bgCol = "white"
var pCol = "black"
var chCol = "green"
var dCol = "red"
var phCol = "green"
var ckCol = "green"
var plCol = "black"


function preload() {
    p = new player()
    assets.sprites.push(p)
}    
    
function setup() {    
    createCanvas(1200,800)
}

    
function draw() {
    background(bgCol)
    assets.sprites
        .filter(sprite => sprite.active)
        .forEach(sprite => {
            sprite.draw()
            sprite.update()
        })
    gravity()
    
     platforms.filter(p => p.active)
        .forEach(sprite => {
            p.draw()
            p.update()
            p.collisions(p)
         sprites.push(p)
    })
     dangers.filter(p => p.active)
        .forEach(sprite => {
           p.draw()
            p.update()
            p.collisions(p)
         sprites.push(p)
    })
     chasers.filter(p => p.active)
        .forEach(sprite => {
           p.draw()
            p.update()
            p.collisions(p)
         sprites.push(p)
    })
    
    phasers.filter(p => p.active)
        .forEach(sprite => {
          p.draw()
            p.update()
        sprites.push(p)
        if(p.col != cyan){
            p.collisions(p)
        }
    })
    checkpoints.filter(p => p.active)
        .forEach(sprite => {
          p.draw()
            p.update()
            p.collisions(p)
        sprites.push(p)
    })
    
    setStage()
}
    
    
    
function collisions(p){
      const playCenter = {
        x: p.x + p.width/2,
        y: p.y + p.height/2
    }
    const platCenter = {
        x: platform.width / 2,
        y: platform.height / 2
    }
    platforms.filter(platorm => platform.active)
        .forEach(platform => {
    if (dist(playCenter.x, playCenter.y, platCenter.x, platCenter.y) > platform.width / 2) {
        p.vy = 0
        collideLineLine(p.x, p.y,platform.x, platform.y, (p.x + p.width),(p.y + p.height), (platform.x + platform.width), (platform.y + platform.height), calcIntersection)
    } 
    })
        
        dangers.filter(platorm => platform.active)
        .forEach(platform => {
    if (dist(playCenter.x, playCenter.y, platCenter.x, platCenter.y) > platform.width / 2) {
        p.die()
    } 
        }) 
    
      checkpoints.filter(platorm => platform.active)
        .forEach(platform => {
    if (dist(playCenter.x, playCenter.y, platCenter.x, platCenter.y) > platform.width / 2) {
        setStage()
    } 
        }) 
    }
    
    
    function gravity(){
        p.vy = grav
    }
    
    
    function changeBg(bc){
        let c = 0
        if (keyCode === 32){
        c += 1
    }
        let colorList = []
        colorList.push("white", "black", "red", "green")
        if (c > colorList.length){
        c = 0
    } 
        bc = colorList[c]
    }
    
    
    function keyPressed() {
    if (keyCode === UP_ARROW || key === 'w')
        p.vy = -5
    if (keyCode === DOWN_ARROW || key === 's')
        p.vy = 5
    if (keyCode === RIGHT_ARROW || key === 'd')
        p.vx = 5
    if (keyCode === LEFT_ARROW || key === 'a')
        p.vx = -5
}
    
function keyReleased() {
    if (keyCode === RIGHT_ARROW
        || keyCode === LEFT_ARROW
        || key === 'd'
        || key === 'a'
       ) p.vx = 0
    if (keyCode === UP_ARROW
        || keyCode === DOWN_ARROW
        || key === 'w'
        || key === 's'
       ) p.vy = 0
    if (keyCode === 32){
        changeBg(bgCol)
    }
    if( key === 'z'){
    p.changeState()
       }
        
}
    
    
function setStage(){
    let stages = []
    let s = 0
    s = lvlcount - 1
    stages[s]
}