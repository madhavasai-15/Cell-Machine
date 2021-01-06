var moverCell = [];
var enemyCell = []; 
var pushCell = [];
var silderCell = [];

var levelState = false;
var level = 3;

var nextButtonVisible = false;
var playButton, resetButton, nextButton;

var GameFont;
var GameState = "Play";
var bg = 38;

function preload(){
  playButton = loadImage("Images/Play_Button.png");
  resetButton = loadImage("Images/Reset_Button.png");
  nextButton = loadImage("Images/Next_Button.png");

  GameFont = loadFont("PIXELADE.TTF");
};

function setup() {
  createCanvas(500, 500);

  //level 1
  moverCell[0] = new MoverCells(level1CordsX[1], level1CordsY[1], 1);
  enemyCell[0] = new EnemyCells(level1CordsX[6], level1CordsY[3]);

  //level 2
  moverCell[1] = new MoverCells(level2CordsX[1], level2CordsY[3], 1);
  enemyCell[1] = new EnemyCells(level2CordsX[6], level2CordsY[1]);
  enemyCell[2] = new EnemyCells(level2CordsX[7], level2CordsY[1]);
  enemyCell[3] = new EnemyCells(level2CordsX[8], level2CordsY[1]);
  pushCell[0] = new PushCell(level2CordsX[0], level2CordsY[6], 1);
  pushCell[1] = new PushCell(level2CordsX[1], level2CordsY[5], 1);


  //level 3
  moverCell[2] = new MoverCells(level3CordsX[1], level3CordsY[7], 1);
  moverCell[3] = new MoverCells(level3CordsX[3], level3CordsY[0], 3);
  moverCell[4] = new MoverCells(level3CordsX[6], level3CordsY[0], 3);
  enemyCell[4] = new EnemyCells(level3CordsX[10], level3CordsY[7]);
  enemyCell[5] = new EnemyCells(level3CordsX[11], level3CordsY[7]);
  pushCell[2] = new PushCell(level3CordsX[0], level3CordsY[0], 3);
  pushCell[3] = new PushCell(level3CordsX[5], level3CordsY[1], 3);
  silderCell[0] = new SilderCells(level3CordsX[2], level3CordsY[7], 0)
};

function draw() {
  background(bg);
  noStroke();
  rectMode(CENTER);
  imageMode(CENTER);
  textFont(GameFont);

  if(GameState === "level" || GameState === "Play"){
    push();
    noFill();
    strokeWeight(4);
    stroke(255)
    rect(250, 470, 100, 40);
    pop();
    fill(255);
    textSize(36);
    text("Menu", 220, 479);
  }

  if(GameState === "MainMenu"){
    MainMenu();
  }else if(GameState === "loading"){
    Loading();
  }else if(GameState === "level"){
    LevelSelection();
  }else if(GameState === "Play"){
    //Grids
    Grid();

  
    //Play Button
    image(playButton, 40, 460);
    //Reset Button
    if(levelState === true){
      image(resetButton, 40, 395)
    }
    //next button
    if(nextButtonVisible === true){
      image(nextButton, 460, 460)
    }

    //level 1
    level1();
    //level 2
    level2();
    //level 3
    level3();
  }else if(GameState === "quit"){
    bg = 43;
  }
};

function mouseReleased(){

  //main menu button clicks
  MainMenu_Clicks();

  //next button function call
  NextButtonClicks();

  if(GameState === "level" || GameState === "Play"){
    //250, 470, 100, 40
    if(mouseX > 250-100/2 && mouseX < 250+100/2 && mouseY > 470-40/2 && mouseY < 470+40/2){
      if(GameState === "Play"){
        GameState = "level";
      }else if(GameState === "level"){
        GameState = "MainMenu";
      }
    }
  }
  

  //play / pause button
  if(GameState === "Play"){
    if(mouseX > 40-25 && mouseX < 40+25 && mouseY > 460-25 && mouseY < 460+25){
      if(levelState === false){
        levelState = true;
      }
    }

  //reset button
    if(mouseX > 40-25 && mouseX < 40+25 && mouseY > 395-25 && mouseY < 395+25){
      level1Reset();
      level2Reset();

    }
    //cell replacement function call
    Cellmoving();
  }
};

//next button
function NextButtonClicks(){
  if(nextButtonVisible === true){
    if(mouseX > 460-25 && mouseX < 460+25 && mouseY > 460-25 && mouseY < 460+25){
      nextButtonVisible = false;
      levelState = false;
      if(level === 1){
        level = 2;
      }else if(level === 2){
        level = 3;
      }
    }
  }
}