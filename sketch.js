

var car,wall;
var speed,weight;




  function setup() {
  createCanvas(1600,400);


  speed=random(55,90)
  weight=random(400,1500)
  

  car=createsprite(50,200,50,50);

  car.velocityx=speed;

  car.shapecolor=color(255);



  wall=createsprite(1500,200,60,height/2)
wall.shapecolor=color(80,80,80)
}


function draw() {
  background(0); 

  if(wall.x-car.x<(car.width+wall.width)/2) 
{
car.velocityx=0;
var deformation='o.5'*weight*speed*speed/22500;
if (deformation>180)
{
car.shapecolor=color(225,0,0);
}

if(deformation<180&&deformation>100)
{
 car.shapecolor=color(230,230,0);
}

if(deformation<100)
  {
  car.shapecolor=(0,255,0);
  }
}
 
  drawSprites()

}


