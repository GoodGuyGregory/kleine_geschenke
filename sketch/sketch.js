// array to hold the snow
let snow = [];
let gravity;
var canvas;
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight+2000);
    // establish the canvas at the center of the site
    canvas.position(0,0);
    // style with the z index attribute
    canvas.style('z-index', '-1');

    gravity = createVector(0,0.008);
}

function draw() {
    background('rgb(22, 91, 51)');
    // allows for myultiple flakes to be redrawn
    snow.push(new SnowFlake());

    for (flake of snow) {
        flake.applyForce(gravity);
        flake.update();
        flake.render();
    }

}