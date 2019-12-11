
//var p
//var platforms = []
//var dangers = []
//var chasers = []
//var phasers = []
//var checkpoints = []
//var bgCol

var grav = 1.5

var setCol

var colList = []
colList.push("white", "black", "red", "green")


function preload(){
 for (var i; i< 100; i++){
      pl = new platform()
      platforms.push(pl)
  } 
    for (var i; i< 100; i++){
      ph = new phaser()
      phasers.push(ph)
  } 
    for (var i; i< 100; i++){
      d = new danger()
      dangers.push(d)
  } 
    for (var i; i< 100; i++){
      ch = new chaser()
      chasers.push(ch)
  } 
    for (var i; i< 50; i++){
      c = new checkpoint()
      checkpoints.push(c)
  } 
    
  bgCol = setCol
//    
//let p = index.js.p
//let platforms = platforms
//let dangers = index.js.dangers
//let chasers = index.js.chasers
//let phasers = index.js.phasers
//let checkpoints = index.js.checkpoints
}

function setup(){
     createCanvas(1200,800)
}

function draw(){
    
}

function activate(){
  for (var i; i< 1; i++){
      createStage()
  } 
}

function createStage(){
     createCanvas(1200,800)
     background(bgCol)
}

var stages = [] 
stage0 = {
    p0 : platforms[0],
    p1 : platforms[1], 
    p2 : platforms[2], 
    p3 : platforms[3],
    d0 : dangers[0],
    d1 : dangers[1],
    c0 : checkpoints[0],
    col: colList[0]
}
stage0.p0 = {
    x: 0,
    y: 0,
    width : 700,
    height : 100,
    active :true,
}
stage0.p1 = {
   x : 300,
   y : 150,
   width : 250,
   height : 50,
   active : true
}
stage0.p2 = {
   x : 600,
   y : 350,
   width : 100,
   height : 50,
   active : true
}
stage0.p3 = {
   x : 750,
   y : 500,
   width : 50,
   height : 50,
   active : true
}
stage0.d0 = {
   x : 150,
   y : 51,
   width : 300,
   height : 30,
   active : true
}
stage0.d1 = {
   x : 450,
   y : 450,
   width : 150,
   height : 30,
   active : true
}
stage0.c0 = {
   x : 750,
   y : 550,
   width : 50,
   height : 100,
   active : true
}

stages.push(stage0)

stage1 = {
    p0 : platforms[4],
    p1 : platforms[5], 
    p2 : platforms[6], 
    p3 : platforms[7],
    ph0: phasers[0],
    d0 : dangers[2],
    d1 : dangers[3],
    c0 : checkpoints[1],
    col: colList[1]
}
stage1.p0 = {
    x : 300,
    y : 400,
    width : 350,
    height : 50,
    active : true
}
stage1.p1 = {
   x : 0,
   y : 600,
   width : 250,
   height : 100,
   active : true
}
stage1.p2 = {
   x : 600,
   y : 350,
   width : 100,
   height : 50,
   active : true
}
stage1.p3 = {
   x : 950,
   y : 0,
   width : 150,
   height : 50,
   active : true
}
stage1.ph0 = {
  x : 750,
  y : 500,
  width : 50,
  height : 50,
  active : true
}
stage1.d0 = {
    x : 150,
   y : 51,
   width : 300,
   height : 30,
   active : true
}
stage1.d1 = {
    x : 450,
   y : 450,
   width : 150,
   height : 30,
   active : true
}
stage1.c0 = {
    x : 1000,
   y : 550,
   width : 50,
   height : 100,
   active : true
}
stages.push(stage1)

stage2 = {
    p0 : platforms[8],
    p1 : platforms[9], 
    p2 : platforms[10], 
    p3 : platforms[11],
    ph0: phasers[1],
    ph1: phasers[2],
    ph2: phasers[3],
    d0 : dangers[4],
    d1 : dangers[5],
    c0 : checkpoints[2],
    col: colList[0]
}
stage2.p0 = {
    x : 0,
    y : 0,
    width : 200,
    height : 100,
    active : true
}
stage2.p1 = {
   x : 200,
   y : 0,
   width : 50,
   height : 150,
   active : true
}
stage2.p2 = {
   x : 300,
   y : 250,
   width : 150,
   height : 50,
   active : true
} 
stage2.p3 = {
   x : 950,
   y : 650,
   width : 150,
   height : 50,
   active : true
}
stage2.ph0 = {
  x : 0,
  y : 150,
  width : 200,
  height : 50,
  active : true
}
stage2.ph1 = {
  x : 500,
  y : 350,
  width : 100,
  height : 50,
  active : true
}
stage2.ph2 = {
  x : 650,
  y : 450,
  width : 150,
  height : 50,
  active : true
}
stage2.d0 = {
    x : 150,
   y : 350,
   width : 200,
   height : 30,
   active : true
}
stage2.d1 = {
    x : 450,
   y : 450,
   width : 150,
   height : 30,
   active : true
}
stage2.c0 = {
    x : 1000,
   y : 700,
   width : 50,
   height : 100,
   active : true
}
stages.push(stage2)


var stage3 = {
    p0 : platforms[12],
    p1 : platforms[13], 
    p2 : platforms[14], 
    p3 : platforms[15],
    ph0: phasers[4],
    ph1: phasers[5],
    ph2: phasers[6],
    d0 : dangers[6],
    d1 : dangers[7],
    c0 : checkpoints[3],
    col: colList[3]
}
stage3.p0 = {
    x : 0,
    y : 0,
    width : 200,
    height : 100,
    active : true
}
stage3.p1 = {
   x : 200,
   y : 0,
   width : 50,
   height : 150,
   active : true
}
stage3.p2 = {
   x : 300,
   y : 250,
   width : 150,
   height : 50,
   active : true
}
stage3.p3 = {
   x : 950,
   y : 650,
   width : 150,
   height : 50,
   active : true
}
stage3.ph0 = {
  x : 0,
  y : 150,
  width : 200,
  height : 50,
  active : true
}
stage3.ph1 = {
  x : 500,
  y : 350,
  width : 100,
  height : 50,
  active : true
}
stage3.ph2 = {
  x : 650,
  y : 450,
  width : 150,
  height : 50,
  active : true
}
stage3.d0 = {
    x : 150,
   y : 350,
   width : 200,
   height : 30,
   active : true
}
stage3.d1 = {
    x : 450,
   y : 450,
   width : 150,
   height : 30,
   active : true
}
stage3.c0 = {
    x : 1000,
   y : 700,
   width : 50,
   height : 100,
   active : true
}
stages.push(stage3)

