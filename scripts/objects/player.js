class Player{

constructor(){
   this.dotsPClick = 1;
   this.bowlsFilled = 0;
   this.bowlNr = 0;
   this.dotsInBowl = 0;
   this.dotsTotal = 0;
   this.dotSize = canvas.height/200;
   this.bowlScale = 0.2;
   this.blockFilling = false;
   this.percFill = 0;
   this.dotsC = color(249,109,14);
   this.uPrices = [500,4000,5000];
   this.tiers = [1,1,1];
   this.autoDots=800;
   this.autoDotsInterval;
}

getBowlPerc(){
let most = 0;
for(let i=4;i<=5;i++){
 if(staticdots[i].length>0){
   let perc = map(staticdots[i][staticdots[i].length-1].pos.y-this.getDotScale()/2,canvas.height-canvas.height/30,bowl.h+canvas.height/23,0,101);
   if(perc>most) most=perc; 
   if(most>=98){this.blockFilling=true;this.bowlsFilled++;most=100;break;}
  }
}

if(most>this.percFill)
this.percFill = most;

}

getDotScale(){
    return this.dotSize/this.bowlScale;
}

getDotSize(){
if(this.dotSize<10){
  return floor(this.dotSize)+" mm";
}
else if(this.dotSize<1000){
  return floor(this.dotSize)/10+" cm";
}
else if(this.dotSize<100000){
  return floor(this.dotSize)/1000+" m";
}
}

upgrade(w){
  if(w==1){
   if(dotolar>=this.uPrices[0]){
     dotolar-=this.uPrices[0];
     this.tiers[0]++;
     this.uPrices[0] = Math.round(this.uPrices[0] * 1.5);
     this.dotSize*=1.3;
   }
  }
  else if(w==2){
    if(dotolar>=this.uPrices[1]){
    dotolar-=this.uPrices[1];
    this.dotsPClick++;
    this.uPrices[1] = Math.round(this.uPrices[1] * 1.5);
    this.tiers[1]++;
    }
  }
  else{
  if(dotolar>=this.uPrices[2]){
    dotolar-=this.uPrices[2];
    this.autoDots/=1.5;
    clearInterval(this.autoDotsInterval);
    this.autoDotsInterval = setInterval(addDot,this.autoDots);
    this.uPrices[2] = Math.round(this.uPrices[2] * 1.5);
    this.tiers[2]++;
  }
  }

}




}


