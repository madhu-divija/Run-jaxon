var path, runner;
var pathImg, runnerImg;
var leftBoundry, rightBoundry;

function preload() {
    pathImg = loadImage("path.png");
    runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
    createCanvas(400, 400);
    //moving road
    path = createSprite(200, 200);
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale = 1.2;

    //boy
    runner = createSprite(200, 350, 200, 150);
    runner.scale = 0.08;
    runner.addAnimation("boy running", runnerImg)

    // LeftBoundry
    leftBoundry = createSprite(0, 0, 100, 800);
    leftBoundry.visible = false;


    // RightBoundry
    rightBoundry = createSprite(420, 0, 100, 800);
    rightBoundry.visible = false
}

function draw() {
    background(0);

    // move boy
    if (keyDown("right_arrow")) {
        runner.x = runner.x + 5
    }

    if (keyDown("left_arrow")) {
        runner.x = runner.x - 5
    }

    // collide
    createEdgeSprites();
    runner.collide(leftBoundry);
    runner.collide(rightBoundry);

    if (path.y > 400) {
        path.y = height / 2;
    }

    drawSprites();
}