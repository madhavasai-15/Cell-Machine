function MainMenu(){        
    push();
    translate(-20, 0);
    rotate(-5);
    fill(95, 145, 252, 150);
    rect(400, 380, 90, 90);
    fill(255, 150);
    triangle(400-16, 380+24, 400+22, 380, 400-16, 380-24);
    pop();

    push();
    translate(0, 0);
    rotate(5);
    fill(255, 216, 0, 150);
    rect(100, 100, 60, 60);
    fill(255, 150);
    rect(100, 100-12, 60/1.4, 60/6);
    rect(100, 100+12, 60/1.4, 60/6);
    pop();

    push();
    translate(-40, 0);
    rotate(-5);
    fill(211, 3, 30, 150);
    rect(100, 400, 30, 30);
    fill(0, 150);
    rect(100-8, 400-7, 30-24, 30-24);
    rect(100+8, 400-7, 30-24, 30-24);
    rect(100, 400+5, 30-10, 30-26);
    rect(100-8, 400+8, 30-26, 30-26);
    rect(100+8, 400+8, 30-26, 30-26);
    pop();

    //text//
    fill(255);
    textSize(160);
    text("Cell", 170, 120);
    push();
    fill(255, 30);
    textSize(160);
    text("Cell", 178, 120);
    pop();
    textSize(100);
    text("Machine", 140, 190);
    push();
    fill(255, 30);
    textSize(100);
    text("Machine", 148, 190);
    pop();

    noFill();
    strokeWeight(4);
    stroke(255);
    rect(250, 300, 120, 60);
    push();
    strokeWeight(4);
    stroke(255, 30);
    rect(250, 304, 120, 60);
    pop();
    noStroke();
    fill(255);
    rect(194, 274, 6, 6);
    rect(305, 274, 6, 6);
    rect(194, 326, 6, 6);
    rect(305, 326, 6, 6);
    textSize(56);
    text("play", 215, 310)

    noFill();
    strokeWeight(4);
    stroke(255);
    rect(250, 380, 80, 40);
    push();
    strokeWeight(4);
    stroke(255, 30);
    rect(250, 384, 80, 40);
    pop();
    noStroke();
    fill(255);
    rect(215, 365, 6, 6);
    rect(285, 365, 6, 6);
    rect(215, 395, 6, 6);
    rect(285, 395, 6, 6);
    textSize(36);
    text("quit", 230, 388);
};

function MainMenu_Clicks(){
    if(GameState === "MainMenu"){
        if(mouseX > 250-120/2 && mouseX < 250+120/2 && mouseY > 300-60/2 && mouseY < 300+60/2){
            if(loading_once === false){
                GameState = "loading";
            }else {
                GameState = "level";
            }
        }

        if(mouseX > 250-80/2 && mouseX < 250+80/2 && mouseY > 380-40/2 && mouseY < 380+40/2){
            GameState = "quit";
        }
    }
};