// import Player from './player.js';

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");


class Player {
    constructor(jogador, nome) {

        this.jogador = jogador;
        this.nome = nome;
        this.largura = 15
        this.altura = 100
        this.x = (this.jogador === 1) ? 80 : 1200
        this.y = (canvas.height - this.altura) / 2

    }

    draw() {
        // console.log("DesenhaPlayer")
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}


const Ball = {
    posX: 10,
    posY: 10,
    speedX: 8,
    speedY: 8,
    size: 10,
    draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(Ball.posX, Ball.posY, Ball.size, 0, Math.PI * 2, false);
        ctx.fill();
    },
}

function clearCanvas() { ctx.clearRect(0, 0, canvas.width, canvas.height) }

const jogador1 = new Player(1, "Fulano")
const jogador2 = new Player(2, "Siclano")
const listenKeys = window.addEventListener('keydown',(e)=>{
    const keyName= e.key;
    console.log(keyName)   
    if (keyName==='ArrowUp')jogador1.y-=40
    if (keyName==='ArrowDown')jogador1.y+=40
    
    
})

function draw() {
    clearCanvas()


    Ball.draw()
    jogador1.draw()
    jogador2.draw()

    Ball.posX += Ball.speedX;
    Ball.posY += Ball.speedY;

    if (Ball.posX + Ball.size >= canvas.width || Ball.posX - Ball.size <= 0) {
        Ball.speedX *= -1
    }
    if (Ball.posY + Ball.size >= canvas.height || Ball.posY - Ball.size <= 0) {
        Ball.speedY *= -1
    }

    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);



