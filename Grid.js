function Grid(){
    if(GameState === "Play"){
        if(level === 1){ //level 1
            for(var j = 183; j < 348; j=j+33){
                for(var i = 100; i < 400; i=i+33){
                    fill(87);
                    rect(i, 150, 30, 30);
                    rect(i, 348, 30, 30);
                    rect(100, j, 30, 30);
                    rect(397, j, 30, 30);
                }
                for(var a = 133; a <= 232; a=a+33){
                    fill(62);
                    rect(a, j, 30, 30);
                }    
                for(var b = 298-33; b <= 430-66; b=b+33){
                    fill(46);
                    rect(b, j, 30, 30);
                }
            }
        }else if(level === 2){ //level 2
            for(var j = 133; j < 364; j=j+33){
                for(var a = 70; a <= 433; a=a+33){
                    fill(87);
                    rect(a, 100, 30, 30);
                    rect(a, 397-33, 30, 30);
                    rect(70, j, 30, 30);
                    rect(433, j, 30, 30);
                }
                for(var b = 103; b < 266; b=b+33){
                    fill(62);
                    rect(b, j, 30, 30);
                }
                for(var c = 268; c < 430; c=c+33){
                    fill(46);
                    rect(c, j, 30, 30);
                }
            }
        }else if(level === 3){//level 3
           for(var i = 33; i < 463; i=i+33){
               for(var j = 99; j < 396; j=j+33){
                fill(87);
                rect(i, 66, 30, 30);
                rect(i, 396, 30, 30);
                rect(33, j, 30, 30);
                rect(462, j, 30, 30);
               }
           }
           for(var i = 66; i < 363; i=i+33){
               for(var j = 99; j < 198; j=j+33){
                fill(62);
                rect(i, j, 30, 30);
               } 
            }
            fill(46);
            rect(363, 99, 30, 30);
            rect(363+33, 99, 30, 30);
            rect(363+66, 99, 30, 30);
            rect(363, 132, 30, 30);
            rect(363+33, 132, 30, 30);
            rect(363+66, 132, 30, 30);
            rect(363, 99+66, 30, 30);
            rect(363+33, 99+66, 30, 30);
            rect(363+66, 99+66, 30, 30);
            for(var i = 66; i < 462; i=i+33){
                for(var j = 198; j < 396; j=j+33){
                    rect(i, j, 30, 30); 
                }
            }
        }
    };
};