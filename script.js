/*
  Animation for Nico's Animation homework  
*/



function setup() {
    var myCanvas = createCanvas(600, 550);
    frameRate(100);
    myCanvas.parent('myContainer');
    stroke(0);
}
var x = 0;
var moveRight = true;
function draw(){
    //Background
    
    background(255,255,0);
    /*
    if(x < 33){
        background(255,255,00);
    }
    else if(x >= 33 && x < 66){
        background(00,00, 255);
    }
    else if(x >= 66){
        background(255,00, 00);
    }
    */
    
    //Drawing
    fill(0,0,0);
    stroke(255,255,255);
    strokeWeight(50);
    ellipse(200 + x, height/2, 30, 30);
    ellipse(400 + x, height/2, 30, 30);
    
    
    if(x == 0){
        line(250, 450, 350, 450);  
    }
    else if(x<0){
        line(250 + x/2, 450, 350 + x, 450);
    }
    else{
        line(250 + x, 450, 350 + x/2, 450);
    }
    //Movement
    if(x == -100){
        moveRight = true;
    }
    else if(x ==100){
        moveRight = false;
    }
    
    if(moveRight){
        x++;
    }
    else if(!moveRight){
        x--;
    }
}