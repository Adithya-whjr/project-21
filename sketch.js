var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,height/2);
  bullet.velocityX= speed;
  bullet.shapeColor=color(255);
 thickness=random(22,83)
}

function draw() {
  background(0);  

 if (hasCollided(bullet,wall))
 {
bullet.velocityX=0;
var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
|
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}

 }
  
  drawSprites();
}

function hasCollided()
{
 bulletRightEdge=buller.x + bullet.width;
 wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false
}

