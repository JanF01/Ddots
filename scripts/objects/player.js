class Player{

constructor(){
   this.dotsPClick = 5;
   this.bowlsFilled = 0;
   this.dotsInBowl = 0;
   this.dotsTotal = 0;
   this.dotSize = canvas.height/300;
   this.bowlScale = 0.2;
   this.blockFilling = false;
}

getBowlPerc(){
let most = 0;
for(let i=8;i<14;i++){
 if(staticdots[i].length>0){
   let perc = map(staticdots[i][staticdots[i].length-1].pos.y,canvas.height,canvas.height-canvas.width/5+canvas.height/23,0,101);
   if(perc-5>most) most=perc; 
   if(most>100){this.blockFilling=true;break;}
  }
}

return most;

}

getDotScale(){
    return this.dotSize/this.bowlScale;
}

getDotSize(){
if(this.dotSize<10){
  return this.dotSize+" mm";
}
else if(this.dotSize<1000){
  return this.dotSize/10+" cm";
}
else if(this.dotSize<100000){
  return this.dotSize/1000+" m";
}
}


}


