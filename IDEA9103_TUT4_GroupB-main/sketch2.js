let song;
let amp;

//Load up the sound 
function preload() {
    song = loadSound("audio/Bellaire - Paris City Jazz.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight); //Creating the canvas to the size of the window
    stroke(2);
    amp = new p5.Amplitude();

}

function draw() {
    //Red Rectangles that changes in size depending on audio 
    let vol = amp.getLevel();
    let resize = map(vol, 0, 1, 0, 1);
    let resize2 = map(vol, 0, 1, 0, 0.2);
    
     //if statement that changes the color of the rectangle
     if (vol < 0.2) {
        background(255, 253, 220);
    } else if (vol > 0.2) {
        background(200, 218, 184);
    }

    //Yellow rectangles
    drawYellowRect(0, 0, 0.072, 0.464);
    drawYellowRect(0.124, 0.078, 0.208, 0.112);
    drawYellowRect(0.127, 0.304, 0.16, 0.096);
    drawYellowRect(0, 0.612, 0.16, 0.176);
    drawYellowRect(0, 0.824, 0.328, 0.18);
    drawYellowRect(0.152, 0.716, 0.132, 0.008);
    drawYellowRect(0.184, 0.508, 0.172, 0.1);
    drawYellowRect(0.388, 0.664, 0.112, 0.104);
    drawYellowRect(0.42, 0.872, 0.056, 0.076);
    drawYellowRect(0.424, 0.248, 0.296, 0.172);
    drawYellowRect(0.528, 0.53, 0.016, 0.072);
    drawYellowRect(0.052, 0.028, 0.112, 0.028);
    drawYellowRect(0.656, 0.776, 0.108, 0.18);
    drawYellowRect(0.688, 0.014, 0.284, 0.148);
    drawYellowRect(0.728, 0.808, 0.128, 0.104);
    drawYellowRect(0.768, 0.108, 0.06, 0.048);
    drawYellowRect(0.082, 0.408, 0.048, 0.128);

    //More yellow rectangles
    drawYellowRect(0.1, 0.152, 0.148, 0.272);
    drawYellowRect(0.144, 0.504, 0.06, 0.052);
    drawYellowRect(0.152, 0.612, 0.132, 0.088);
    drawYellowRect(0.168, 0.756, 0.086, 0.104);
    drawYellowRect(0.284, 0.154, 0.132, 0.136);
    drawYellowRect(0.272, 0.273, 0.108, 0.064);
    drawYellowRect(0.416, 0.304, 0.088, 0.152);
    drawYellowRect(0.292, 0.476, 0.08, 0.096);
    drawYellowRect(0.428, 0.592, 0.016, 0.064);
    drawYellowRect(0.352, 0.696, 0.124, 0.212);
    drawYellowRect(0.484, 0.832, 0.104, 0.048);
    drawYellowRect(0.54, 0.150, 0.388, 0.06);
    drawYellowRect(0.6, 0.256, 0.072, 0.128);
    drawYellowRect(0.768, 0.252, 0.092, 0.176);
    drawYellowRect(0.568, 0.5, 0.152, 0.256);
    drawYellowRect(0.736, 0.584, 0.16, 0.092);
    drawYellowRect(0.68, 0.72, 0.128, 0.26);
    drawYellowRect(0.824, 0.788, 0.048, 0.06);


    //Blue rectangles
    drawBlueRect(0.052, 0.032, 0.052, 0.388);
    drawBlueRect(0.14, 0.1, 0.172, 0.068);
    drawBlueRect(0.152, 0.328, 0.14, 0.048);
    drawBlueRect(0.2, 0.528, 0.148, 0.076);
    drawBlueRect(0.02, 0.6336, 0.128, 0.12);
    drawBlueRect(0.168, 0.728, 0.092, 0.048);
    drawBlueRect(0, 0.852, 0.312, 0.148);
    drawBlueRect(0.492, 0.052, 0.088, 0.152);
    drawBlueRect(0.412, 0.268, 0.268, 0.148);
    drawBlueRect(0.484, 0.576, 0.016, 0.028);
    drawBlueRect(0.408, 0.68, 0.08, 0.072);
    drawBlueRect(0.436, 0.848, 0.036, 0.026);
    drawBlueRect(0.736, 0.084, 0.052, 0.024);
    drawBlueRect(0.68, 0.168, 0.284, 0.092);
    drawBlueRect(0.792, 0.484, 0.64, 0.036);
    drawBlueRect(.64, 0.568, 0.228, 0.104);
    drawBlueRect(0.708, 0.82, 0.096, 0.08)

    //Added the resize and resize2 into the width and length parameter of the red rect
    drawRedRect(0.34, 0, resize2, resize);
    drawRedRect(0.148, 0.148, resize, resize);
    drawRedRect(0.56, 0.124, resize, resize2);
    drawRedRect(0.484, 0.18, resize2, resize);
    drawRedRect(0.856, 0.216, resize, resize2);
    drawRedRect(0, 0.388, resize, resize2);
    drawRedRect(0.624, 0.34, resize2, resize);
    drawRedRect(0.282, 0.544, resize, resize2);
    drawRedRect(0.12, 0.622, resize2, resize);
    drawRedRect(0.64, 0.552, resize, resize2);
    drawRedRect(0.8, 0.6, resize2, resize);
    drawRedRect(0.252, 0.832, resize, resize2);
    drawRedRect(0.476, 0.7, resize, resize);
    drawRedRect(0.616, 0.74, resize, resize);
    drawRedRect(0.252, 0.832, resize2, resize2);
    drawRedRect(0.824, 0.856, resize, resize2);

}

//Defining a function to draw the yellow rectangles with size relative to the window size
function drawYellowRect(inputXPos, inputYPos, inputWidth, inputHeight) {
    let outputXPos = inputXPos;
    let outputYPos = inputYPos;
    let outputWidth = inputWidth;
    let outputHeight = inputHeight;
    fill(248, 196, 12);
    rect(outputXPos * windowWidth, outputYPos * windowHeight, outputWidth * windowWidth, outputHeight * windowHeight);

}

//Defining a function to draw the blue rectangles with size relative to the window size
function drawBlueRect(inputXPos, inputYPos, inputWidth, inputHeight) {
    let outputXPos = inputXPos;
    let outputYPos = inputYPos;
    let outputWidth = inputWidth;
    let outputHeight = inputHeight;
    fill(10, 19, 122);
    rect(outputXPos * windowWidth, outputYPos * windowHeight, outputWidth * windowWidth, outputHeight * windowHeight);
}

//Defining a function that draws a red rectangle with size relative to window size
function drawRedRect(inputXPos, inputYPos, inputWidth, inputHeight) {
    let outputXPos = inputXPos;
    let outputYPos = inputYPos;
    let outputWidth = inputWidth;
    let outputHeight = inputHeight;
    fill(255,0,0);
    rect(outputXPos * windowWidth, outputYPos * windowHeight, outputWidth * windowWidth, outputHeight * windowHeight);
}
//Responsive design. 
//Since the rectangles are drawn in ratio of the window width and height, they will not change position
//Rectangles will change in size relative to window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

function mouseClicked() {
    if (song.isPlaying()) {
        song.pause();
        noLoop();
    } else {
        song.play();
        loop();
    }
}