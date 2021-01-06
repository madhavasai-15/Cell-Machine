class EnemyCells{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        this.alive = true;
        this.visible = 255;
    };

    show(){            
        if(this.alive === true){
            this.visible = 255;
        }else if(this.alive === false){
            this.visible -= 15;
        }
        
        fill(211, 3, 30, this.visible);
        rect(this.x, this.y, this.w, this.h);
        fill(0, this.visible);
        rect(this.x-8, this.y-7, this.w-24, this.h-24);
        rect(this.x+8, this.y-7, this.w-24, this.h-24); 
        rect(this.x, this.y+5, this.w-10, this.h-26);
        rect(this.x-8, this.y+8, this.w-26, this.h-26);
        rect(this.x+8, this.y+8, this.w-26, this.h-26);
    };
}