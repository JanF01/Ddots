var bowlnames = [];

class Bowl{

    constructor(w,c){
        this.w = w;
        this.h = canvas.height-w/2;
        this.c = c;
    }

    draw(){
        noFill();
        stroke(this.c);
        strokeWeight(canvas.height/30);
        arc(canvas.width/2,this.h,this.w,this.w,0.15,3);
    }

    getSize(){
      let size =  this.w*player.bowlScale;
      if(size<10){
        return floor(size)+" mm";
      }
     else if(size<1000){
        return floor(size)/10+" cm";
      }
      else if(size<100000){
        return floor(size)/1000+" m";
      }
    }
}