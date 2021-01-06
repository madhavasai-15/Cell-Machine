class SilderCells{
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        this.dirNum = direction;
    };

    show(){
                
        fill(255, 216, 0);
        rect(this.x, this.y, this.w, this.h);
        fill(255);
        switch(this.dirNum){
            case 0: rect(this.x - 6, this.y, this.w/6, this.h/1.4);
                    rect(this.x + 6, this.y, this.w/6, this.h/1.4);
                break;
            case 1: rect(this.x, this.y - 6, this.w/1.4, this.h/6);
                    rect(this.x, this.y + 6, this.w/1.4, this.h/6);       
                break;
            default:
                break;         
        }
        
        
    };
}