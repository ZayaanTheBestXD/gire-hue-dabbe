class Box{
//properties

constructor(x,y,width,height){
    var box_options={
        isStatic:false,
        restitution:1,
       
      }
   this.body=Bodies.rectangle(x,y,width,height,box_options);
   this.width=width;
   this.height=height;
   //this.body.angle=PI/5;
   World.add(world,this.body);
}

//functions
display(){
 var pos=this.body.position
 var angle=this.body.angle

push();
translate(pos.x,pos.y);
rotate(angle)
rectMode(CENTER)
fill(255,0,0);
rect(0,0,this.width,this.height);
pop();
}
}

