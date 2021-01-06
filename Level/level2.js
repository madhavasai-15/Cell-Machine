var level2CordsX = [103, 136, 169, 202, 235, 268, 301, 334, 367, 400];//9
var level2CordsY = [133, 166, 199, 232, 265, 298, 331];//6

var level2MoverCellReplacement = false;
var level2Pushcell1Replacement = false;
var level2Pushcell2Replacement = false;

function level2(){
    if(level === 2){
        if(levelState === false){
            moverCell[1].dir(0, 0);
        }else if(levelState === true){
            if(moverCell[1].x < level2CordsX[9]-2){
                moverCell[1].dir(1, 0);
            }else if(moverCell[1].x > level2CordsX[9]-2){
                moverCell[1].dir(0, 0);
            }
        }

        if(level2MoverCellReplacement === true){
            moverCell[1].x = mouseX;
            moverCell[1].y = mouseY;
            level2CellLimits(moverCell[1]);
        }else {
            if(levelState === false){
                CellPos2(moverCell[1]);
            }
        }
        if(level2Pushcell1Replacement === true){
            pushCell[0].x = mouseX;
            pushCell[0].y = mouseY;
            level2CellLimits(pushCell[0]);
        }else {
            if(levelState === false){
                CellPos2(pushCell[0]);
            }
        }
        if(level2Pushcell2Replacement === true){
            pushCell[1].x = mouseX;
            pushCell[1].y = mouseY;
            level2CellLimits(pushCell[1]);
        }else {
            if(levelState === false){
                CellPos2(pushCell[1]);
            }
        }

        if(enemyCell[1].alive === false && enemyCell[2].alive === false && enemyCell[3].alive === false){
            nextButtonVisible = true;
        }

        level2killing(moverCell[1], pushCell[0], pushCell[1], enemyCell[1]);
        level2killing(moverCell[1], pushCell[0], pushCell[1], enemyCell[2]);
        level2killing(moverCell[1], pushCell[0], pushCell[1], enemyCell[3]);

        fill(255);
        textSize(25);
        text("Most cells can be pushed by others" , 110, 50);

        enemyCell[1].show();
        enemyCell[2].show();
        enemyCell[3].show();
        moverCell[1].show();
        moverCell[1].update();
        pushCell[0].show();
        pushCell[0].colliding(moverCell[1]);
        pushCell[0].colliding(pushCell[1]);
        pushCell[1].show();
        pushCell[1].colliding(moverCell[1]);
        pushCell[1].colliding(pushCell[0]);
    }
};

//cells kill enemy function
function level2killing(cell1, cell2, cell3, enemy){
    //enemy
    if(enemy.alive === true){
        //cell1
        if(cell1.alive === true){
            if(cell1.x > enemy.x-enemy.w/2 && cell1.x < enemy.x+enemy.w/2 && cell1.y > enemy.y-enemy.h/2 && cell1.y < enemy.y+enemy.h/2){
                cell1.alive = false;
                enemy.alive = false;
            }
        }
        //cell2
        if(cell2.alive === true){
            if(cell2.x > enemy.x-enemy.w/2 && cell2.x < enemy.x+enemy.w/2 && cell2.y > enemy.y-enemy.h/2 && cell2.y < enemy.y+enemy.h/2){
                cell2.alive = false;
                enemy.alive = false;
            }
        }
        //cell3
        if(cell3.alive === true){
            if(cell3.x > enemy.x-enemy.w/2 && cell3.x < enemy.x+enemy.w/2 && cell3.y > enemy.y-enemy.h/2 && cell3.y < enemy.y+enemy.h/2){
                cell3.alive = false;
                enemy.alive = false;
            }
        }
    }
};

//cell limits to go
function level2CellLimits(Cell){
    if(Cell.x < level2CordsX[0]+1){
        Cell.x = level2CordsX[0];
    }else if(Cell.x > level2CordsX[4]+1){
        Cell.x = level2CordsX[4];
    }
    if(Cell.y < level2CordsY[0]+1){
        Cell.y = level2CordsY[0];
    }else if(Cell.y > level2CordsY[6]+1){
        Cell.y = level2CordsY[6];
    }
};

//cell reposition
function CellPos2(cell){
    if(cell.x < level2CordsX[1]-16.5){
        cell.x = level2CordsX[0];
    }else if(cell.x < level2CordsX[2]-16.5 && cell.x > level2CordsX[1]-16.5){
        cell.x = level2CordsX[1];
    }else if(cell.x < level2CordsX[3]-16.5 && cell.x > level2CordsX[2]-16.5){
        cell.x = level2CordsX[2];
    }else if(cell.x < level2CordsX[4]-16.5 && cell.x > level2CordsX[3]-16.5){
        cell.x = level2CordsX[3];
    }else if(cell.x < level2CordsX[5]-16.5 && cell.x > level2CordsX[4]-16.5){
        cell.x = level2CordsX[4];
    }else if(cell.x < level2CordsX[6]-16.5 && cell.x > level2CordsX[5]-16.5){
        cell.x = level2CordsX[5];
    }else if(cell.x < level2CordsX[7]-16.5 && cell.x > level2CordsX[6]-16.5){
        cell.x = level2CordsX[6];
    }else if(cell.x < level2CordsX[8]-16.5 && cell.x > level2CordsX[7]-16.5){
        cell.x = level2CordsX[7];
    }else if(cell.x < level2CordsX[9]-16.5 && cell.x > level2CordsX[8]-16.5){
        cell.x = level2CordsX[8];
    }else if(cell.x > level2CordsX[9]-16.5){
        cell.x = level2CordsX[9];
    }

    if(cell.y < level2CordsY[1]-16.5){
        cell.y = level2CordsY[0];
    }else if(cell.y < level2CordsY[2]-16.5 && cell.y > level2CordsY[1]-16.5){
        cell.y = level2CordsY[1];
    }else if(cell.y < level2CordsY[3]-16.5 && cell.y > level2CordsY[2]-16.5){
        cell.y = level2CordsY[2];
    }else if(cell.y < level2CordsY[4]-16.5 && cell.y > level2CordsY[3]-16.5){
        cell.y = level2CordsY[3];
    }else if(cell.y < level2CordsY[5]-16.5 && cell.y > level2CordsY[4]-16.5){
        cell.y = level2CordsY[4];
    }else if(cell.y < level2CordsY[6]-16.5 && cell.y > level2CordsY[5]-16.5){
        cell.y = level2CordsY[5];
    }else if(cell.y > level2CordsY[6]-16.5){
        cell.y = level2CordsY[6];
    }
};

//level reset
function level2Reset(){
    if(level === 2){
        moverCell[1].x = level2CordsX[1];
        moverCell[1].y = level2CordsY[3];

        pushCell[0].x = level2CordsX[0];
        pushCell[0].y = level2CordsY[6];

        pushCell[1].x = level2CordsX[1];
        pushCell[1].y = level2CordsY[5];

        enemyCell[1].x = level2CordsX[6];
        enemyCell[1].y = level2CordsY[1];
        enemyCell[2].x = level2CordsX[7];
        enemyCell[2].y = level2CordsY[1];
        enemyCell[3].x = level2CordsX[8];
        enemyCell[3].y = level2CordsY[1];

        moverCell[1].alive = true;
        pushCell[0].alive = true;
        pushCell[1].alive = true;
        enemyCell[1].alive = true;
        enemyCell[2].alive = true;
        enemyCell[3].alive = true;
        levelState = false;
    }
};