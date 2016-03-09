//adds the html stuff variables
var p = document.getElementById("playground");
var stop = document.getElementById("stop");
var ctx = p.getContext("2d");
var start = document.getElementById("start");
//style of canvas
ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";

//x and y coordinates of dvd
var x = 0;
var y = 0;

//x and y velocities of dvd
var velx = 0;
var vely = 0;

//variable for animation frame
var anim = 0;
var inc = 0.3;
var img = new Image();
img.src = "dojocat.png";
//clear canvas

function stopCanvas(){
    cancelAnimationFrame(anim);
}
//left = 37 up = 38 right = 39 down = 40
function ctrlpuck(e){

    if (e.keyCode == 39)
        velx += inc ;
    if (e.keyCode == 37) 
        velx -= inc;
    if (e.keyCode == 38) 
        vely -= inc;
    if (e.keyCode == 40) 
        vely += inc;

}

function everySec(e){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.drawImage(img, x, y, 70, 70);
    ctx.closePath();
    ctx.stroke();
    if ((x >= (500 - 70) && velx > 0) || (x <= 0 && velx < 0)) velx = -velx;
    if ((y >= (500 - 70) && vely > 0) || (y <= 0 && vely < 0)) vely = -vely
    x += velx;
    y += vely;
    anim = requestAnimationFrame(everySec);
}

document.addEventListener("keydown", ctrlpuck);
start.addEventListener("click", everySec);
stop.addEventListener("click", stopCanvas);
