let stage = 0;
let frame = 0;

function setup() {
  createCanvas(800, 1422);
}

function preload() {
  i1 = loadImage("image/i 1.jpg");
  i2 = loadImage("image/i 2.jpg");
    i3 = loadImage("image/i 3.jpg");
    i4 = loadImage("image/i 4.jpg");
}

function draw() {
  background(220);
  switch (stage) {
    case 0:
      frame = frame+1;
      image(i2, 0, 0, width, height);
      rect(70,637,662,122);
      rect(70,880,662,122);
      rect (260,1120,270,100)
      if (frame > 15) {
      if (mouseIsPressed) {
        frame = 0;
        stage = 1;
      }
      }
      break;
    case 1:
      frame = frame+1;
      image(i2, 0, 0, width, height);
      if (frame > 15) {
       if (
            mouseIsPressed &&
            mouseX >= 70 &&
            mouseX <= 730 &&
            mouseY >= 637 &&
            mouseY <= 759
          ) {
         frame = 0;
         stage = 2;
       }
      if (
            mouseIsPressed &&
            mouseX >= 70 &&
            mouseX <= 730 &&
            mouseY >= 880 &&
            mouseY <= 1002
          ) {
        frame = 0;
         stage = 3;
       }
        
        //back
        if (
            mouseIsPressed &&
            mouseX >= 260 &&
            mouseX <= 530 &&
            mouseY >= 1120 &&
            mouseY <= 1220
          ) {
        frame = 0;
         stage = 0;
       }
      }
      break;
      case 2:
         frame = frame+1;
           image(i3, 0, 0, width, height);
      if (frame > 15) {
         if (
            mouseIsPressed &&
            mouseX >= 260 &&
            mouseX <= 530 &&
            mouseY >= 1120 &&
            mouseY <= 1220
          ) {
        frame = 0;
         stage = 1;
       }
      }
        break;
      case 3:
         frame = frame+1;
           image(i4, 0, 0, width, height);
      if (frame > 15) {
    
         if (
            mouseIsPressed &&
            mouseX >= 260 &&
            mouseX <= 530 &&
            mouseY >= 1120 &&
            mouseY <= 1220
          ) {
        frame = 0;
         stage = 1;
       }
      }
        break;
    default:
      break;
  }
}
