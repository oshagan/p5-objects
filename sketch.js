class Sprite {
  constructor(x, y, drawFunction){
    this.x = x;
    this.y = y;
    this.drawFunction = drawFunction;
  }
  draw() {
    this.update();
    this.drawFunction();
  }
  // update: change the state with each frame
  update() {

  }
}

class EmojiHead extends Sprite {
  constructor(x, y, speed, emoji, goingUp){
    super(x, y, () => text(this.emoji, this.x, this.y));
    this.speed = speed;
    this.emoji = emoji;
    this.up = goingUp;
  }

  update() {
    if(this.up){
      this.y -= this.speed;
    }
    else{
      this.y += this.speed;
    }
    if(this.y > height){
      this.up = true;
    }
    if(this.y < 0){
      this.up = false;
    }
  }
}

class Rock extends Sprite {
  constructor(x, altitude, speed) {
    super(x, height - altitude, () => ellipse(this.x, this.y, 10));
    this.speed = speed;
  }

  update(){
    this.y += this.speed;
    if(this.y >= height - 4){
      this.y = height - 4;
    }
  }

}

class ParaRock extends Rock {
  constructor(x, altitude,speed){
    super(x, altitude,speed);
  }
  draw(){
    ellipse(this.x, height - this.altitude - 10, 30);
    text('override', this.x, height - this.altitude, 10);
    this.update();
  }
}

let head1;
let head2;
let rock;

function setup () {
  createCanvas(300,300);
  head1 = new EmojiHead(100, 0, 2, '😀', false);
  head2 = new EmojiHead(200, height, 1, '😅', true)
  rock = new Rock(width/2, height, 1);
  // leftRock = new ParaRock(100,height,1.5);
}

function draw () {
  background(200);
  head1.draw();
  head2.draw();
  rock.draw();
}
