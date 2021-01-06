class PushCell{
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        this.alive = true;
        this.visible = 255;
        this.dirNum = direction;
    };

    colliding(cell){
        if(cell.dirNum === 0){
            if(this.x - cell.x <= cell.w/2 + this.w/2 && cell.x - this.x <= cell.w/2 + this.w/2 && this.y - cell.y <= cell.h/2 + this.h/2 && cell.y - this.y <= cell.h/2 + this.h/2){
                this.x -= 3;
            }
        }else if(cell.dirNum === 1){
            if(this.x - cell.x <= cell.w/2 + this.w/2 && cell.x - this.x <= cell.w/2 + this.w/2 && this.y - cell.y <= cell.h/2 + this.h/2 && cell.y - this.y <= cell.h/2 + this.h/2){
                this.x += 3;
            }
        }else if(cell.dirNum === 2){
            if(this.x - cell.x <= cell.w/2 + this.w/2 && cell.x - this.x <= cell.w/2 + this.w/2 && this.y - cell.y <= cell.h/2 + this.h/2 && cell.y - this.y <= cell.h/2 + this.h/2){
                this.y -= 3;
            }
        }else if(cell.dirNum === 3){
            if(this.x - cell.x <= cell.w/2 + this.w/2 && cell.x - this.x <= cell.w/2 + this.w/2 && this.y - cell.y <= cell.h/2 + this.h/2 && cell.y - this.y <= cell.h/2 + this.h/2){
                this.y += 3;
            }
        }
    };

    show(){
        if(this.alive === true){
            this.visible = 255;
        }else if(this.alive === false){
            this.visible -= 15;
        }
        
        fill(255, 216, 0, this.visible);
        rect(this.x, this.y, this.w, this.h);
        fill(255, this.visible);
        rect(this.x - 6, this.y, this.w/6, this.h/1.4);
        rect(this.x + 6, this.y, this.w/6, this.h/1.4);
        rect(this.x, this.y - 6, this.w/1.4, this.h/6);
        rect(this.x, this.y + 6, this.w/1.4, this.h/6);
    };
}