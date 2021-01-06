class MoverCells{
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        this.xspeed = 0;
        this.yspeed = 0;
        this.visible = 255;
        this.alive = true;
        this.dirNum = direction;
    };

    colliding(cell){
        if(this.x - cell.x <= cell.w/2 + this.w/2 && cell.x - this.x <= cell.w/2 + this.w/2 && this.y - cell.y <= cell.h/2 + this.h/2 && cell.y - this.y <= cell.h/2 + this.h/2){
            this.y += 3;
        }
    }

    dir(x, y){
        this.xspeed = x*3;
        this.yspeed = y*3;
    };

    update(){
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    };

    show(){
        if(this.alive === true){
            this.visible = 255;
        }else if(this.alive === false){
            this.visible -= 15;
        }

        fill(95, 145, 252, this.visible);
        rect(this.x, this.y, this.w, this.h);   
        fill(255, this.visible);
        switch(this.dirNum){
/*  left  */case 0: triangle(this.x + 8, this.y - 12, this.x - 10, this.y, this.x + 8, this.y + 12);
                break;
/*  right */case 1: triangle(this.x - 8, this.y + 12, this.x + 11, this.y, this.x - 8, this.y - 12); 
                break;
/*  top   */case 2: triangle(this.x - 11, this.y + 10, this.x + 11, this.y + 10, this.x, this.y - 12);
                break;
/* bottom */case 3: triangle(this.x, this.y + 12, this.x + 11, this.y- 10, this.x - 11, this.y - 10);
                break;
            default:
                break;                
        }
        
    };
}