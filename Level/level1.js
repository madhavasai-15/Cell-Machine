//level1 grid cords
var level1CordsX = [133, 166, 199, 232, 265, 298, 331, 364]; //8 = 7
var level1CordsY = [183, 216, 249, 282, 315];//5 = 4

var level1Replacement = false;

function level1(){
    if(level === 1){
        if(levelState === false){
            moverCell[0].dir(0, 0);
        }else if(levelState === true){
            if(moverCell[0].x < level1CordsX[7] && enemyCell[0].alive !== false){
                moverCell[0].dir(1, 0);
            }else {
                moverCell[0].dir(0, 0);
            }
        }

        if(level1Replacement === true){
            moverCell[0].x = mouseX;
            moverCell[0].y = mouseY;
            if(moverCell[0].x < 134){
                moverCell[0].x = 133;
            }else if(moverCell[0].x > 233){
                moverCell[0].x = 232;
            }

            if(moverCell[0].y < 182){
                moverCell[0].y = 183
            }else if(moverCell[0].y > 349-33){
                moverCell[0].y = 348-33 ;
            }
        }else {
            if(levelState === false){
                CellPos1(moverCell[0]);
            }
        }

        //enemy cell and mover cell colliding
        if(moverCell[0].x > enemyCell[0].x-enemyCell[0].w/2 && moverCell[0].x < enemyCell[0].x+enemyCell[0].w/2 && moverCell[0].y > enemyCell[0].y-enemyCell[0].h/2 && moverCell[0].y < enemyCell[0].y+enemyCell[0].h/2){
            enemyCell[0].alive = false;
            moverCell[0].alive = false;
        }

        //next button appearnce
        if(enemyCell[0].alive === false){
            nextButtonVisible = true;
        }

        fill(255);
        textSize(25);
        text("press cells in the build area. Press play to run the" , 70, 50);
        text("simulation. Destroy the enemy cells to win.", 90, 80);
      
        enemyCell[0].show();
        moverCell[0].update(); 
        moverCell[0].show();
    }       
};

function CellPos1(cell){
    //X position of cell
    if(cell.x < level1CordsX[1]-16.5){
        cell.x = level1CordsX[0]
    }else if(cell.x > level1CordsX[1]-16.5 && cell.x < level1CordsX[2]-17){
        cell.x = level1CordsX[1];
    }else if(cell.x < level1CordsX[2]-16.5 && cell.x > level1CordsX[2]-17){
        cell.x = level1CordsX[2]
    }else if(cell.x > level1CordsX[2]-16.5 && cell.x < level1CordsX[3]-17){
        cell.x = level1CordsX[2]
    }else if(cell.x > level1CordsX[3]-16.5){
        cell.x = level1CordsX[3];
    }

    //Y position of cell
    if(cell.y < level1CordsY[1]-16.5){
        cell.y = level1CordsY[0];
    }else if(cell.y > level1CordsY[1]-16.5 && cell.y < level1CordsY[2]-16.5){
        cell.y = level1CordsY[1];
    }else if(cell.y > level1CordsY[2]-16.5 && cell.y < level1CordsY[3]-16.5){
        cell.y = level1CordsY[2];
    }else if(cell.y > level1CordsY[3]-16.5 && cell.y < level1CordsY[4]-16.5){
        cell.y = level1CordsY[3];
    }else if(cell.y > level1CordsY[4]-16.5){
        cell.y = level1CordsY[4];
    }
};

//when reset button is clicked in level1 cell's position is reset
function level1Reset(){
    if(level === 1){
        moverCell[0].x = level1CordsX[1];
        moverCell[0].y = level1CordsY[1];

        enemyCell[0].x = level1CordsX[6];
        enemyCell[0].y = level1CordsY[3];

        levelState = false;
        enemyCell[0].alive = true;
        moverCell[0].alive = true;
    }
};