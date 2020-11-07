var car, wall, speed, weight, deformation;


function setup() {
  createCanvas(1000,400);
  speed = random(50,100);
  weight = random(400,1500);
  car = createSprite(200,200,50,50);
  car.velocityX=speed;
  car.shapeColor="white";
  
  wall = createSprite(900,200,50,height/2);
  wall.shapeColor="#A52A2A";  
}

function draw() {
  background("skyblue");  
 if (wall.x-car.x<car.width/2+wall.width/2) {
  car.velocityX=0;
   
  deformation = (0.5*weight*speed*speed)/22500;
  if (deformation<100) {
    car.shapeColor="green";
    textSize(20);
    fill("green");
    textFont("Impact");
    text("Good",400,150);
  }
  if (deformation>=100&&deformation<=180) {
    car.shapeColor="yellow";
    textSize(20);
    fill("yellow");
    textFont("Impact");
    text("Average",400,150);
  }
  if (deformation>180) {
    car.shapeColor="red";
    textSize(20);
    fill("red");
    textFont("Impact");
    text("Lethal",400,150);
  }
 }
  drawSprites();
}