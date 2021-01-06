var loading_angle = 0;
var loading_percent = 0;
var loading_once = false;

function Loading(){
    push();
    angleMode(DEGREES);
    translate(250, 250);
    rotate(loading_angle);
    noFill();
    strokeWeight(4);
    stroke(255);
    rect(0, 0, 100, 100);
    loading_angle += 1;
    pop();

    if(frameCount % 3 === 0 && loading_percent < 100){
        loading_percent += 4;
    }

    fill(255);
    textSize(32);
    text(loading_percent + "%", 240, 350);

    if(loading_percent > 98){
        GameState = "level";
    }
};