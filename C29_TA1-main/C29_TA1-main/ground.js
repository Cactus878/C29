class Ground{
    constructor(x, y, width, height){
        var ground_options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}