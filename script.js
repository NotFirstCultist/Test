let canvas = document.querySelector('.canvas');
let screen = canvas.getContext('2d');
let lineTimer;
let meteorTimer;

canvas.width = 300;
canvas.height = 500;

let starTimer = 30;

let playerPos = [0, 0];
let playerSize = [10, 10];

let lineX = [];
let lineY = [];

let meteorX = [];
let meteorY = [];
let meteorSize = [];
let meteorSpeed = [];

window.addEventListener('mousemove', (event) => {
    playerPos[0] = event.clientX;
    playerPos[1] = event.clientY;
});

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function CreateLine(){
    lineX.push(randomNum(5, canvas.width - 5));
    lineY.push(10);
}

function CreateMeteor(){
    a = randomNum(15, 100);
    meteorSize.push(a);
    meteorX.push(randomNum(0, canvas.width - a));
    meteorY.push(-a);
    meteorSpeed.push(randomNum(1, 4));
}

function draw(){
    //Black screen
    screen.fillStyle = '#000';
    screen.fillRect(0, 0, canvas.width, canvas.height);

    //White outline
    screen.strokeStyle = '#fff';
    screen.strokeRect(0, 0, canvas.width, canvas.height);

    //Player
    screen.fillStyle = '#fff';
    screen.fillRect(playerPos[0] - playerSize[0] / 2 - 8, playerPos[1] - playerSize[1] / 2 - 8, playerSize[0], playerSize[1]);

    //White lines (space)
    screen.fillStyle = '#fff';
    for (i = 0; i < lineX.length; i++){
        screen.fillRect(lineX[i], lineY[i], 1, 10);
        lineY[i] += 4;
        if (lineY[i] > canvas.height + 10){
            lineX.splice(i, 1);
            lineY.splice(i, 1);
        }
    }

    //Meteor
    screen.fillStyle = '#640000';
    for (i = 0; i < meteorX.length; i++){
        screen.fillRect(meteorX[i], meteorY[i], meteorSize[i], meteorSize[i]);
        meteorY[i] += meteorSpeed[i];
        if (meteorY[i] > canvas.height + meteorSize[i]){
            meteorX.splice(i, 1);
            meteorY.splice(i, 1);
            meteorSize.splice(i, 1);
            meteorSpeed.splice(i, 1);
        }
    }

    requestAnimationFrame(draw);
}

lineTimer = setInterval(CreateLine, 100);
meteorTimer = setInterval(CreateMeteor, randomNum(1000, 3000))
draw();