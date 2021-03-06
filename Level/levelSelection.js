function LevelSelection(){
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

    
};
