function setup() {
    createCanvas(1920, 937);
    background(40);
    frameRate(5);
}

function draw() {
   fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
   noStroke();
   circle(Math.floor(Math.random() * 2000), Math.floor(Math.random() * 800), Math.floor(Math.random() * 600))
}