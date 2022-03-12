var cvs=document.getElementById("canvas");
var ctz=cvs.getContext("2d");

var snakeW=10;
var snakeH=10;


dir="down";
function drawSnake(x,y)
{
ctz.fillStyle="yellow";
ctz.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
ctz.fillStyle="black";
ctz.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH)
}

//create snake

var len = 4;
snake = [];
for(var i=len-1; i>=0;i--){
    snake.push({x:i,
        y:0
    })
}
//cotrol dir
document.addEventListener("keydown",dirContral);
function dirContral(e){
    if(e.keyCode==37 && dir!="right"){
        dir="left";
    }
    else if(e.keyCode==38 && dir!="down"){
        dir="up";
    }

    else if(e.keyCode==39 && dir!="left"){
        dir="right";
    }

  else if(e.keyCode==40 && dir!="up"){
        dir="down";
    }
}

                              //food creat
 
var food={
    x:Math.round(Math.random()*(cvs.width/snakeW-1)+1),
    y:Math.round(Math.random()*(cvs.height/snakeH-1)+1),

}

     //draww food
     function drawFood(x,y){

        ctz.fillStyle="red";
        ctz.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
        ctz.fillStyle="black";
        ctz.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH)


     }

//draw function
function draw(){
    
ctz.clearRect(0,0,cvs.clientWidth,cvs.height);


for(var i=0;i<snake.length;i++){
    var X = snake[i].x;
    var Y = snake[i].y;

    drawSnake(X,Y)
}

drawFood(food.x,food.y);

var snakeX = snake[0].x;
var snakeY = snake[0].y;
if(snakeX<=0|| snakeY<0 || snakeX>=cvs.width/snakeW||snakeY>=cvs.height/snakeH){
    alert("game over");
}

if(dir=="right"){snakeX++}
else if(dir=="left"){snakeX--}
else if(dir=="up"){snakeY--}
else if(dir=="down"){snakeY++}

if(snakeX==food.x && snakeY==food.y){
    food={
        x:Math.round(Math.random()*(cvs.width/snakeW)+1),
        y:Math.round(Math.random()*(cvs.height/snakeH)+1)
    }
    //new head
var newhead = {

    x:snakeX,
    y:snakeY,

}
}else{
snake.pop();


var newhead = {

    x:snakeX,
    y:snakeY,
}
}
    
snake.unshift(newhead);

}//end draw function

setInterval(draw,100);

