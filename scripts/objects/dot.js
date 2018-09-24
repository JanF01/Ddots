function addToArray(e){
    if(e.pos.y>canvas.height-canvas.width/5+canvas.height/23){
   let i = floor(map(e.pos.x,canvas.width/2-canvas.width/5,canvas.width/2+canvas.width/5,0,20));
   staticdots[i].push(e);
   player.dotsInBowl++;
    }
    else{
     let i = dots.indexOf(e);
     dots.splice(i,1);
    }
}

class Dot{

constructor(s,x,y){
   this.size = s;
   this.c =  color(249,109,14);;
   this.pos = createVector(x,y);
   this.vel = createVector(0,4);
   this.stay = false;
   this.sector = Math.floor(map(x,canvas.width/2-canvas.width/5,canvas.width/2+canvas.width/5,0,20));
}

move(){

  this.pos.add(this.vel);

  

    if(dist(this.pos.x,this.pos.y,canvas.width/2,canvas.height-canvas.width/5)>=canvas.height/2.5 && this.pos.y>canvas.height/1.5){
          this.stay=true;
          addToArray(this); 
    }
    else{
    for(let i=0;i<staticdots[this.sector].length;i++){

          if(dist(staticdots[this.sector][i].pos.x,staticdots[this.sector][i].pos.y,this.pos.x,this.pos.y)<this.size/2+staticdots[this.sector][i].size/2){
              this.stay=true;
             addToArray(this); 
             break;
         } 
  
        }
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