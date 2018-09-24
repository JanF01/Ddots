bowlnames = ["BEGINNING BOWL"];
class Bowl{

    constructor(w,h,c,t){
        this.w = w;
        this.h = h;
        this.c = c;
        this.t = t;
    }

    draw(){
        noFill();
        stroke(255);
        strokeWeight(canvas.height/30);
        arc(canvas.width/2,canvas.height-canvas.width/5,this.w,this.w,0.15,3);
    }

    getSize(){
      return this.w*player.bowlScale + " mm";

    }
}