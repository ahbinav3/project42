class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
            
        }
        this.image=loadImage("images/Walking/walking_1.png","images/Walking/walking_2.png","images/Walking/walking_3.png","images/Walking/walking_4.png","images/Walking/walking_5.png","images/Walking/walking_6.png","images/Walking/walking_7.png","images/Walking/walking_8.png")
this.Umbrella=Bodies.circle(x,y,50,options)
this.radius=50;
World.add(world,this.Umbrella);

}
display(){
    var pos=this.Umbrella.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y+70,300,300);



}

}