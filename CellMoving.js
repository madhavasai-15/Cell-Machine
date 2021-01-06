function Cellmoving(){
  if(levelState === false){
    if(level === 1){ // level 1
      //movercell[0] replacement 
      if(CellClicksPos(moverCell[0])){
        if(level1Replacement === false){
          level1Replacement = true;
        }else {
          level1Replacement = false;
        }
      }  
    }else if(level === 2){ //level 2//
      //movercell[1] replacement 
      if(CellClicksPos(moverCell[1])){
          if(level2MoverCellReplacement === false){
            level2MoverCellReplacement = true;
          }else if(level2MoverCellReplacement === true){
            level2MoverCellReplacement = false;
          }
      }
  
      //pushcell[0] replacement
      if(CellClicksPos(pushCell[0])){
          if(level2Pushcell1Replacement === false){
            level2Pushcell1Replacement = true;
          }else if(level2Pushcell1Replacement === true){
            level2Pushcell1Replacement = false;
          }
      }    
  
        //pushcell[1] replacement
      if(CellClicksPos(pushCell[1])){
        if(level2Pushcell2Replacement === false){
          level2Pushcell2Replacement = true;
        }else if(level2Pushcell2Replacement === true){
          level2Pushcell2Replacement = false;
        }
      }
    }else if(level === 3){
      if(CellClicksPos(moverCell[3])){
        if(level3MoverCell3Replacement === false){
          level3MoverCell3Replacement= true;
        }else if(level3MoverCell3Replacement === true){
          level3MoverCell3Replacement = false;
        }
      }

      if(CellClicksPos(moverCell[4])){
        if(level3MoverCell4Replacement === false){
          level3MoverCell4Replacement = true;
        }else if(level3MoverCell4Replacement === true){
          level3MoverCell4Replacement = false;
        }
      }

      if(CellClicksPos(pushCell[2])){
        if(level3PushCell2Replacement === false){
          level3PushCell2Replacement = true;
        }else if(level3PushCell2Replacement === true){
          level3PushCell2Replacement = false;
        }
      }

      if(CellClicksPos(pushCell[3])){
        if(level3PushCell3Replacement === false){
          level3PushCell3Replacement = true;
        }else if(level3PushCell3Replacement === true){
          level3PushCell3Replacement = false;
        }
      }
    }
  }
};

function CellClicksPos(cell){
  if(mouseX > cell.x-cell.w/2 && mouseX < cell.x+cell.w/2 && mouseY > cell.y-cell.h/2 && mouseY < cell.y+cell.h/2){
      return true;
  }else {
      return false;
  }
}