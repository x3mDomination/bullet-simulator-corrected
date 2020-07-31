var bullet, wall,thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 75, 25);

  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0); 

  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;

    damage = (weight*(speed*speed))/(2*(thickness*thickness*thickness));

    if(damage<10) {
      bullet.shapeColor = color(0,255,0);
    }
    if(damage>10) {
      bullet.shapeColor = color(255,0,0);
    }
  }

  drawSprites();
}

function hasCollided(testBullet,testWall) {
  bulletRightEdge = testBullet.x+testBullet.width/2;
  wallLeftEdge = testWall.x-testWall.width/2;

  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  else {
    return false;
  }
}