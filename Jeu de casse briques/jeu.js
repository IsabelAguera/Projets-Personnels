var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //2D l'outil réel que nous pouvons utiliser pour peindre sur Canvas.//

var x = canvas.width/2;//on le donne la position
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);//efface la trace de la ball
    drawBall();
    x += dx;
    y += dy;
  }

  setInterval(draw, 10); //la function draw sera appelé tout le 10 ms