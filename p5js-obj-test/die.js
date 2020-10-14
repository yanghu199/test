//draw a spinning teapot
var song;
let book;
let blue;

function preload() {
  // Load model with normalise parameter set to true
   song = loadSound('data/love.mp3');
   ball = loadModel('data/ball.obj', true);
   blue = loadImage('data/blue.png',true);
    
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
//imageMode(CENTER);
//image(di,0,0,windowWidth, windowHeight);//di = background imaage
}

function draw() {
 background(255,20,147);

   // Scaled to make model fit into canvas
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.008);
  noStroke();
   scale(0.8);
  texture(blue);
 model(ball);

 
}

function mousePressed(){
   if (song.isPlaying()){ //checks if the song is playing!!
  song.stop(); // if it is, then stop the song
   }
   else{
     song.play();
   }



}
