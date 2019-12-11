var p
var platforms = []
var dangers = []
var chasers = []
var phasers = []
var checkpoints = []

var grav = 1.5

var stage = {
    platforms: [],
    phaserrs: [],
    chasers:[],
    dangers:[],
    checkpoints: [],
    col: bgCol  
}


    
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
    p = new Player()
    assets.sprites.push(p)
    
let archive = archive.js
var stages = []


//stages.push(archive.stages)
stages.push(archive.stage0, archive.stage1, archive.stage2, archive.stage3)
//var archive = [stage]
}    
    
function setup() {    
    createCanvas(1200,800)
}

    
function draw(){
    background(bgCol)
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
         p.chase()
         sprites.push(p)
    })
    
    phasers.filter(p => p.active)
        .forEach(sprite => {
          p.draw()
            p.update()
        sprites.push(p)
        if(p.color != cyan){
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
    
    assets.sprites
        .filter(sprite => sprite.active)
        .forEach(sprite => {
            sprite.draw()
            sprite.update()
        })
        gravity()
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
             chasers.filter(platorm => platform.active)
        .forEach(platform => {
    if (dist(playCenter.x, playCenter.y, platCenter.x, platCenter.y) > platform.width / 2) {
        p.die()
    } 
                 
        }) 
    
     phasers.filter(platorm => platform.active)
        .forEach(platform => {
    if (dist(playCenter.x, playCenter.y, platCenter.x, platCenter.y) > platform.width / 2 && p.color != "green") {
          collideLineLine(p.x, p.y,platform.x, platform.y, (p.x + p.width),(p.y + p.height), (platform.x + platform.width), (platform.y + platform.height), calcIntersection)
    } 
        }) 
    
      checkpoints.filter(platorm => platform.active)
        .forEach(platform => {
    if (dist(playCenter.x, playCenter.y, platCenter.x, platCenter.y) > platform.width / 2) {
          collideLineLine(p.x, p.y,platform.x, platform.y, (p.x + p.width),(p.y + p.height), (platform.x + platform.width), (platform.y + platform.height), calcIntersection)
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
        p.vy = (-1 * p.SPEED)
    if (keyCode === DOWN_ARROW || key === 's')
        p.vy = (1 * p.SPEED)
    if (keyCode === RIGHT_ARROW || key === 'd')
        p.vx = (1 * p.SPEED)
    if (keyCode === LEFT_ARROW || key === 'a')
        p.vx = (-1 * p.SPEED)
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
//    
//function clearCP(){
//    
//}

function chase(){
    for(var i; i < chasers.active; i++){
  if(p.x < chasers[i].x) {
    chasers[i].vx = -1 * SPEED
  }
  else if(p.x > chasers[i].x) {
    chasers[i].vx = 1 * SPEED
  }
  else if(p.y < chasers[i].y) {
    chasers[i].vx = -1 * SPEED
  }
  else if(p.y < chasers[i].y) {
    chasers[i].vx = 1 * SPEED
  }
  else{
   chasers[i].vx = 0 
  }
}
}


    
function setStage(){
    let s = 0
    s = lvlcount - 1
    stage[s]
}