var level3CordsX = [66, 99, 132, 165, 198, 231, 264, 297, 330, 363, 396, 429];//11
var level3CordsY = [100, 133, 166, 199, 232, 265, 298, 331, 364];//8

var level3MoverCell3Replacement = false;
var level3MoverCell4Replacement = false;
var level3PushCell2Replacement = false;
var level3PushCell3Replacement = false;

function level3(){
    if(level === 3){
        if(levelState === false){
            moverCell[3].dir(0, 0);
        }else if(levelState === true){
            if(moverCell[3].y < level3CordsY[8]){
                moverCell[3].dir(0, 1);
            }else {
                moverCell[3].dir(0, 0);
            }

            if(moverCell[4].y < level3CordsY[8]){
                moverCell[4].dir(0, 1);
            }else {
                moverCell[4].dir(0, 0);
            } 
            moverCell[3].colliding(moverCell[4]);
            moverCell[4].colliding(moverCell[3]);
        }

        if(level3MoverCell3Replacement === true){
            moverCell[3].x = mouseX;
            moverCell[3].y = mouseY;
            level3CellLimits(moverCell[3]);
        }else {
            if(levelState === false){
                CellPos3(moverCell[3]);
            }
        }

        

        if(level3MoverCell4Replacement === true){
            moverCell[4].x = mouseX;
            moverCell[4].y = mouseY;
            level3CellLimits(moverCell[4]);
        }else {
            if(levelState === false){
                CellPos3(moverCell[4]);
            }
        }

        if(level3PushCell2Replacement === true){
            pushCell[2].x = mouseX;
            pushCell[2].y = mouseY;
            level3CellLimits(pushCell[2]);
        }else {
            if(levelState === false){
                CellPos3(pushCell[2]);
            }
        }

        if(level3PushCell3Replacement === true){
            pushCell[3].x = mouseX;
            pushCell[3].y = mouseY;
            level3CellLimits(pushCell[3]);
        }else {
            if(levelState === false){
                CellPos3(pushCell[3]);
            }
        }


        enemyCell[4].show();
        enemyCell[5].show();
        moverCell[2].show();
        moverCell[2].update();
        moverCell[3].show();
        moverCell[3].update();
        moverCell[4].show();
        moverCell[4].update();
        pushCell[2].show();
        pushCell[2].colliding(moverCell[3]);
        pushCell[2].colliding(pushCell[3]);
        pushCell[3].show();
        pushCell[3].colliding(moverCell[3]);
        pushCell[3].colliding(pushCell[2]);
        silderCell[0].show();
    }
};

//cell reposition
function CellPos3(cell){
    if(cell.x < level3CordsX[1]-16.5){
        cell.x = level3CordsX[0];
    }else if(cell.x < level3CordsX[2]-16.5 && cell.x > level3CordsX[1]-16.5){
        cell.x = level3CordsX[1];
    }else if(cell.x < level3CordsX[3]-16.5 && cell.x > level3CordsX[2]-16.5){
        cell.x = level3CordsX[2];
    }else if(cell.x < level3CordsX[4]-16.5 && cell.x > level3CordsX[3]-16.5){
        cell.x = level3CordsX[3];
    }else if(cell.x < level3CordsX[5]-16.5 && cell.x > level3CordsX[4]-16.5){
        cell.x = level3CordsX[4];
    }else if(cell.x < level3CordsX[6]-16.5 && cell.x > level3CordsX[5]-16.5){
        cell.x = level3CordsX[5];
    }else if(cell.x < level3CordsX[7]-16.5 && cell.x > level3CordsX[6]-16.5){
        cell.x = level3CordsX[6];
    }else if(cell.x < level3CordsX[8]-16.5 && cell.x > level3CordsX[7]-16.5){
        cell.x = level3CordsX[7];
    }else if(cell.x < level3CordsX[9]-16.5 && cell.x > level3CordsX[8]-16.5){
        cell.x = level3CordsX[8];
    }else if(cell.x > level3CordsX[9]-16.5){
        cell.x = level3CordsX[9];
    }

    if(cell.y < level3CordsY[1]-16.5){
        cell.y = level3CordsY[0];
    }else if(cell.y < level3CordsY[2]-16.5){
        cell.y = level3CordsY[1];
    }else if(cell.y > level3CordsY[2]-16.5){
        cell.y = level3CordsY[2];
    }
}

function level3CellLimits(Cell){
    if(Cell.x < level3CordsX[0]+1){
        Cell.x = level3CordsX[0];
    }else if(Cell.x > level3CordsX[8]+1){
        Cell.x = level3CordsX[8];
    }
    if(Cell.y < level3CordsY[0]+1){
        Cell.y = level3CordsY[0];
    }else if(Cell.y > level3CordsY[2]+1){
        Cell.y = level3CordsY[2];
    }
}

function level3Reset(){
    if(level === 3){

    }
};