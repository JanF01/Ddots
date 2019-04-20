
var canvas;
var bowl;
var dotfont;
var player;
var dotimg = [];

function preload(){

dotfont = loadFont("assets/fonts/HanaleiFill-Regular.ttf");
dotimg[3] = loadImage("assets/images/bigger.png");
dotimg[4] = loadImage("assets/images/more.png");
dotimg[5] = loadImage("assets/images/auto.png");
}5555
function setup(){
    canvas = createCanvas(window.innerWidth,window.innerHeight);
    bowl = new Bowl(canvas.height/2,color(180,255,255));
    
    for(let i=0;i<9;i++){
      let array = [];
      staticdots.push(array);
    }
   player = new Player();

  bowlnames = [["BEGINNING BOWL",canvas.height/2],["RICE BOWL",canvas.height/1.6,color(205),color(255),0.5],["BOWL OF WATER",canvas.height/1.3,color(50,160,255),color(0,0,240),1.2],["BOWL FULL OF MAGMA",canvas.height/1.1,color(255,30,50),color(255,100,0),4],["SHREK'S SHOWER BOWL",canvas.height/1.3,color(0,255,0),color(90,255,130),16]];
   sizeBefore = floor(player.dotSize);
 v = createVector(0,0.4);
 textFont(dotfont);
    frameRate(30);
}
var v;

function draw(){
  background(46, 49, 49);
fill(player.dotsC);
arc(canvas.width/2,bowl.h,bowl.w,bowl.w,map(player.percFill,0,100,1.35,0.15),map(player.percFill,0,100,1.8,3), OPEN);

noFill();
   for(let i=0;i<dots.length;i++){
    if(!dots[i].stay){
      dots[i].draw();
       dots[i].addForce(v);
       dots[i].move();
    }
   }
   bowl.draw();
   mainPanel();
}
var c=false;
var cs=0;
var ss=0;
var ns=0;
var dots = [];
var staticdots = new Array();
var dotolar = 0;
var onoff = 255;
let mainPanel=()=>{

  imageMode(CENTER);
  // if(onoff!=255){
  //   image(dotimg[2],canvas.width/2,canvas.height/3,canvas.height/2.4+cs,canvas.height/2.7+cs);
  // }
  // else{
  // image(dotimg[1],canvas.width/2,canvas.height/3,canvas.height/2.4+cs,canvas.height/2.7+cs);
  // }
  strokeWeight(canvas.height/230);
  stroke(255, 60, 5);
  fill(onoff);
  ellipse(canvas.width/2,canvas.height/3,canvas.height/2.8+cs,canvas.height/3+cs);   
  fill(255)
  ellipse(canvas.width/2.8,canvas.height/7.5,canvas.height/6.2,canvas.height/6.5);   
  ellipse(canvas.width/1.55,canvas.height/7.5,canvas.height/6.2,canvas.height/6.5);   

  textSize(canvas.height/10+cs/2);
  fill(0);

  stroke(249,109,14);
  strokeWeight(canvas.height/200);
  line(canvas.width/1.37,canvas.height/5.5,canvas.width,canvas.height/5.5);
  textAlign(LEFT);
  line(canvas.width/1.37,canvas.height/2.85,canvas.width,canvas.height/2.85);
  line(canvas.width/1.37,canvas.height/1.94,canvas.width,canvas.height/1.94);
  line(0,canvas.height/5.5,canvas.width/3.7,canvas.height/5.5);
  line(0,canvas.height/2.85,canvas.width/3.7,canvas.height/2.85);
  line(0,canvas.height/1.94,canvas.width/3.7,canvas.height/1.94);
  line(canvas.width/4,0,canvas.width/4,canvas.height);
  line(canvas.width*0.75,0,canvas.width*0.75,canvas.height);
  line(0,canvas.height/1.94,canvas.width/3.7,canvas.height/1.94);

  noStroke();
  //stroke(onoff);
  text("DOTS",canvas.width/2-canvas.height/9.7-cs/1.5,canvas.height/2.67);
  textSize(canvas.height/22);
  text("NEXT",canvas.width/2.8-canvas.height/21.5,canvas.height/8);
  text("BOWL",canvas.width/2.8-canvas.height/18.5,canvas.height/6.1);
  text("SELL",canvas.width/1.55-canvas.height/24.8,canvas.height/8);
  text("DOTS",canvas.width/1.55-canvas.height/22.2,canvas.height/6);


  fill(249,109,14);
  textAlign(CENTER);
  textSize(canvas.height/22);
  text(dotolar+" Q",canvas.width/2,canvas.height/15);
  textAlign(LEFT);
  textSize(canvas.height/26);
  text("GAME STATUS",canvas.width*0.75+canvas.height/6.5,canvas.height/20);
  text("BOWL NAME:",canvas.width*0.75+canvas.height/40,canvas.height/10);
  text("BOWLS FILLED: "+player.bowlsFilled,canvas.width*0.75+canvas.height/40,canvas.height/4.4);
  text("DOTS SIZE: "+player.getDotSize(),canvas.width/50,canvas.height/1.4);
  text("BOWL SIZE: "+bowl.getSize(),canvas.width/50,canvas.height/1.3);
  text("DOTS IN BOWL: "+player.dotsInBowl,canvas.width*0.75+canvas.height/40,canvas.height/3.6);
  text("% OF THE BOWL FILLED: ",canvas.width*0.75+canvas.height/40,canvas.height/3.05);
  text("DOTS MADE IN TOTAL",canvas.width*0.75+canvas.height/10,canvas.height/2.37);
  textAlign(CENTER);
  text(player.dotsTotal,canvas.width*0.75+canvas.height/4,canvas.height/2.09);
  textAlign(LEFT);
  let perc;
  if(player.percFill<100) player.getBowlPerc();
  perc = player.percFill;
  text(floor(perc)+"%",canvas.width*0.75+canvas.height/2.4,canvas.height/3.05);
  textSize(canvas.height/20);
  text(bowlnames[player.bowlNr][0],canvas.width*0.75+canvas.height/40,canvas.height/6.5);
  

  image(dotimg[3],canvas.height/15,canvas.height/15,canvas.height/13,canvas.height/13);
  image(dotimg[4],canvas.height/15,canvas.height/4.2,canvas.height/13,canvas.height/13);
  image(dotimg[5],canvas.height/15,canvas.height/2.47,canvas.height/13,canvas.height/13);
  textSize(canvas.height/40);
  text("Make your dots bigger",canvas.height/8,canvas.height/17);
  text("Cost: "+player.uPrices[0],canvas.height/8,canvas.height/11);
  text("Make more Dots",canvas.height/8,canvas.height/4.33);
  text("Cost: "+player.uPrices[1],canvas.height/8,canvas.height/3.83);
  text("Make it rain for you",canvas.height/8,canvas.height/2.52);
  text("Cost: "+player.uPrices[2],canvas.height/8,canvas.height/2.34);
  textAlign(CENTER);
  text("Tier: "+player.tiers[0],canvas.height/2.25,canvas.height/29);
  text("Tier: "+player.tiers[1],canvas.height/2.25,canvas.height/4.6);
  text("Tier: "+player.tiers[2],canvas.height/2.25,canvas.height/2.6);
  fill(190,70,14);stroke(249,109,14);
  rect(canvas.height/6,canvas.height/9,canvas.height/6,canvas.height/20);
  rect(canvas.height/6,canvas.height/3.55,canvas.height/6,canvas.height/20);
  rect(canvas.height/6,canvas.height/2.23,canvas.height/6,canvas.height/20);
  fill(255);stroke(249,109,14);textSize(canvas.height/28);
  text("UPGRADE",canvas.height/4,canvas.height/6.8);
  text("UPGRADE",canvas.height/4,canvas.height/3.14);
  text("UPGRADE",canvas.height/4,canvas.height/2.06);
  textAlign(LEFT);





}


function addDot(){
  let rx;

  if(random(0,1)<0.33)
  rx = random(canvas.width/2-(bowl.w/2)*3/5,canvas.width/2+(bowl.w/2)*3/5);
  else
  rx = random(canvas.width/2-bowl.w/2,canvas.width/2+bowl.w/2);

  let dot = new Dot(player.getDotScale(),rx,random(canvas.height/3-canvas.height/10,canvas.height/3+canvas.height/10),player.dotsC);
  dots.push(dot);

  player.dotsTotal++;
}


function mousePressed(){
  if(dist(canvas.width/2,canvas.height/3,mouseX,mouseY)<canvas.height/5.6){
    if(player.percFill!=100){
  c = true;
  let rx;
  for(let i=0;i<player.dotsPClick;i++){
  if(random(0,1)<0.33)
  rx = random(canvas.width/2-(bowl.w/2)*3/5,canvas.width/2+(bowl.w/2)*3/5);
  else
  rx = random(canvas.width/2-bowl.w/2,canvas.width/2+bowl.w/2);

  let dot = new Dot(player.getDotScale(),rx,random(canvas.height/3-canvas.height/10,canvas.height/3+canvas.height/10),player.dotsC);
  dots.push(dot);

  player.dotsTotal++;
  }
   //createDot();
   }
  }
else if(dist(canvas.width/2.8,canvas.height/7.5,mouseX,mouseY)<canvas.height/13){
  if(player.percFill==100){
  nextBowl();
  }
}
else if(dist(canvas.width/1.55,canvas.height/7.5,mouseX,mouseY)<canvas.height/13){
  sellDots();
}
else if(abs(canvas.height/6+canvas.height/12-mouseX)<canvas.height/12 && abs(canvas.height/9+canvas.height/40-mouseY)<canvas.height/40){
 player.upgrade(1);
}
else if(abs(canvas.height/6+canvas.height/12-mouseX)<canvas.height/12 && abs(canvas.height/3.55+canvas.height/40-mouseY)<canvas.height/40){
  player.upgrade(2);
 }
else if(abs(canvas.height/6+canvas.height/12-mouseX)<canvas.height/12 && abs(canvas.height/2.23+canvas.height/40-mouseY)<canvas.height/40){
  player.upgrade(3);
}

}


function nextBowl(){
    player.bowlNr++;
    bowl.w = bowlnames[player.bowlNr][1];
    bowl.c = bowlnames[player.bowlNr][2];
    bowl.h = canvas.height-bowl.w/2;
    player.dotsC=bowlnames[player.bowlNr][3];
    player.bowlScale = bowlnames[player.bowlNr][4];
    for(let i=0;i<9;i++){
      staticdots[i] = [];
   }
    x();
}


var sum=0;
var sizeBefore;
function sellDots(){
  let sizeNow = floor(player.dotSize);
 let scale = (sizeBefore+sizeNow)/2; 
for(let i=0;i<9;i++){
   
   sum+=staticdots[i].length*scale;
   staticdots[i] = [];
}
dotolar+=sum;
sum=0;
x();
}

let x = ()=>{
  player.percFill=0;
  player.blockFilling=false;
  player.dotsInBowl = 0;
  dots = [];
}
