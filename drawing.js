const backgroundColor = '#000000';
const lineColor = '#FFFFFF'
const lineWidth = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var mousePressed = false;

var canvas;
var context;


function prepareCanvas() {
    console.log('Preparing Canvas');
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');


    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    context.lineJoin = 'round';

    document.addEventListener('mousedown', function (event) {
        mousePressed = true;
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
    });

    canvas.addEventListener('touchstart', function (e) {
        mousePressed = true;
        currentX = e.touches[0].clientX - canvas.offsetLeft;
        currentY = e.touches[0].clientY - canvas.offsetTop;
    });

    document.addEventListener('mouseup', function (event) {
        mousePressed = false;
    });

    canvas.addEventListener('mouseleave', function (event) {
        mousePressed = false;
    });

    canvas.addEventListener('touchend', function (event) {
        mousePressed = false;
    });

    document.addEventListener('mousemove', function (event) {

        if (mousePressed) {
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;
            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;
            draw();
        }
    });

    canvas.addEventListener('touchmove', function (e) {

        if (mousePressed) {
            previousX = currentX;
            currentX = e.touches[0].clientX - canvas.offsetLeft;
            previousY = currentY;
            currentY = e.touches[0].clientY - canvas.offsetTop;
            draw();
        }
    });
}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}