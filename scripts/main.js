
var canvas;
var bowl;
var dotfont;
var player;
var dotimg = [];

function preload(){

dotfont = loadFont("assets/fonts/HanaleiFill-Regular.ttf");
dotimg[0] = loadImage("assets/images/dots.png");
dotimg[1] = loadImage("assets/images/dots2.png");
dotimg[2] = loadImage("assets/images/dots2full.png");
}
function setup(){
    canvas = createCanvas(window.innerWidth,window.innerHeight);
    bowl = new Bowl(canvas.width/2.5,canvas.height/3,color(255,0,0),"Rise Bowl");
    
    for(let i=0;i<20;i++){
      let array = [];
      staticdots.push(array);
    }
   player = new Player();

 v = createVector(0,0.2);
 textFont(dotfont);
    frameRate(30);
}
var v;

function draw(){
  background(46, 49, 49);

   for(let i=0;i<dots.length-2;i++){
     if(!dots[i].stay){
       dots[i].addForce(v);
       dots[i].move();
     }
       dots[i].draw();
   }
   bowl.draw();
   mainPanel();

}
var c=false;
var cs=0;
var dots = [];
var staticdots = new Array();
var dotolar = 0;
var onoff = 255;
let mainPanel=()=>{

  stroke(249, 105, 14);
  strokeWeight(canvas.height/170);
  imageMode(CENTER);
  //ellipse(canvas.width/2,canvas.height/3,canvas.height/2.8+cs,canvas.height/3+cs);   
  if(onoff!=255){
    image(dotimg[2],canvas.width/2,canvas.height/3,canvas.height/2.4+cs,canvas.height/2.7+cs);
  }
  else{
  image(dotimg[1],canvas.width/2,canvas.height/3,canvas.height/2.4+cs,canvas.height/2.7+cs);
  }
  strokeWeight(canvas.height/230);
  stroke(255, 60, 5);
  fill(255);
  ellipse(canvas.width/2.8,canvas.height/7.5,canvas.height/6.2,canvas.height/6.5);   
  ellipse(canvas.width/1.55,canvas.height/7.5,canvas.height/6.2,canvas.height/6.5);   
  textSize(canvas.height/10+cs/2);
  fill(0);
  stroke(onoff);
  text("DOTS",canvas.width/2-canvas.height/9.7-cs/1.5,canvas.height/2.67);
  textSize(canvas.height/22);
  stroke(255);
  text("NEXT",canvas.width/2.8-canvas.height/21.5,canvas.height/8);
  text("BOWL",canvas.width/2.8-canvas.height/18.5,canvas.height/6.1);
  text("SELL",canvas.width/1.55-canvas.height/24.8,canvas.height/8);
  text("DOTS",canvas.width/1.55-canvas.height/22.2,canvas.height/6);
  stroke(46, 49, 49);
  fill(249,109,14);
  textAlign(CENTER);
  textSize(canvas.height/18);
  text(dotolar+" Q",canvas.width/2,canvas.height/15);
  textAlign(LEFT);
  textSize(canvas.height/19);
  text("BOWL NAME:",canvas.width/1.27,canvas.height/16);
  text("BOWLS FILLED: "+player.bowlsFilled,canvas.width/1.31,canvas.height/5);
  text("DOTS SIZE: "+player.getDotSize(),canvas.width/50,canvas.height/1.4);
  text("BOWL SIZE: "+bowl.getSize(),canvas.width/50,canvas.height/1.3);
  textAlign(CENTER);
  text("DOTS IN BOWL: "+player.dotsInBowl,canvas.width/1.1775,canvas.height/4);
  text("% OF THE BOWL FILLED: ",canvas.width/1.1775,canvas.height/3.3);
  text("DOTS MADE IN TOTAL: ",canvas.width/1.17,canvas.height/2.27);
  text(player.dotsTotal,canvas.width/1.17,canvas.height/2);
  let perc = player.getBowlPerc();
  text(floor(perc)+"%",canvas.width/1.1775,canvas.height/2.8);
  textSize(canvas.height/17);
  text(bowlnames[player.bowlsFilled],canvas.width/1.175,canvas.height/8.5);
  stroke(249,109,14);
  line(canvas.width/1.4,canvas.height/7,canvas.width,canvas.height/7);
  textAlign(LEFT);
  line(canvas.width/1.4,canvas.height/2.6,canvas.width,canvas.height/2.6);
  fill(46, 49, 49);

  if(perc>100){
   onoff=color(255,45,19);
  }else onoff = 255;
  
  if(c && cs<Math.floor(canvas.height/40)){
cs+=5;
  }
  else{
    c=false;
    if(cs>0 && !c){
      cs-=4;
     }
  }


}


function mousePressed(){
  if(!player.blockFilling){
  if(dist(canvas.width/2,canvas.height/3,mouseX,mouseY)<canvas.height/5.6){
  c = true;
  let rx;
  for(let i=0;i<player.dotsPClick;i++){
  if(random(0,1)<0.33)
  rx = random(canvas.width/2-(canvas.width/5)*3/5,canvas.width/2+(canvas.width/5)*3/5);
  else
  rx = random(canvas.width/2-canvas.width/5,canvas.width/2+canvas.width/5);

  let dot = new Dot(player.getDotScale(),rx,random(canvas.height/3-canvas.height/10,canvas.height/3+canvas.height/10));
  dots.push(dot);

  player.dotsTotal++;
  }
   //createDot();
   }
  }

if(dist(canvas.width/1.55,canvas.height/7.5,mouseX,mouseY)<canvas.height/13){
  sellDots();
}


}
var sum=0;
function sellDots(){
  
for(let i=0;i<20;i++){
   sum+=staticdots[i].length;
   staticdots[i] = [];
}
dots = [];
dotolar+=sum;
player.blockFilling=false;
player.dotsInBowl = 0;
sum=0;
}
