function addToArray(e){
    if(e.pos.y>bowl.h+canvas.height/23){
   let i = floor(map(e.pos.x,canvas.width/2-canvas.height/2,canvas.width/2+canvas.height/2,0,9));
   staticdots[i].push(e);
   player.dotsInBowl++;
    }
    else{
     let i = dots.indexOf(e);
     dots.splice(i,1);
    }
}

class Dot{

constructor(s,x,y,c){
   this.size = s;
   this.c =  c;
   this.pos = createVector(x,y);
   this.vel = createVector(0,6);
   this.stay = false;
   this.sector = Math.floor(map(x,canvas.width/2-canvas.height/2,canvas.width/2+canvas.height/2,0,9));
}

move(){

  this.pos.add(this.vel);

  if(!player.blockFilling){

    if(dist(this.pos.x,this.pos.y,canvas.width/2,bowl.h)>=bowl.w/2-canvas.height/50 && this.pos.y>bowl.h+canvas.height/23){
          this.stay=true;
          addToArray(this); 
    }
    else{
    for(let i=floor(staticdots[this.sector].length/1.5);i<staticdots[this.sector].length;i++){

          if(dist(staticdots[this.sector][i].pos.x,staticdots[this.sector][i].pos.y,this.pos.x,this.pos.y)<this.size/2+staticdots[this.sector][i].size/2){
              this.stay=true;
             addToArray(this); 
             break;
         } 
  
        }
    }
  
}
else{
this.c=color(220,70,10);
}

}

addForce(f){
this.vel.add(f);
}

draw(){
stroke(this.c);
strokeWeight(2);
ellipse(this.pos.x,this.pos.y,this.size,this.size);
}



}