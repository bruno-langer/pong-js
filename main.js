

const Ball = {
    posX:10,
    posY:10,
    speedX:10,
    speedY:10,
    size:10
}






const c = document.getElementById("canvas");
const ctx = c.getContext("2d");


function draw() {

    function clearCanvas(cx) {

        ctx.clearRect(0,0,canvas.width,canvas.height)
        
    }
    clearCanvas()

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(Ball.posX, Ball.posY, Ball.size, 0, Math.PI * 2, false);
    ctx.fill();

    Ball.posX += Ball.speedX;
    Ball.posY += Ball.speedY;

    if (Ball.posX+Ball.size>=canvas.width ||Ball.posX-Ball.size<=0) {
        Ball.speedX *= -1
    }
    if (Ball.posY+Ball.size>=canvas.height||Ball.posY-Ball.size<=0) {
        Ball.speedY *= -1
    }
   
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);



