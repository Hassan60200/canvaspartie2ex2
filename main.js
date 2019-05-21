var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.fillStyle='white';
  ctx.moveTo(250,200);
  ctx.quadraticCurveTo(200,40,150,200);
  ctx.fill();
  ctx.stroke();

 //pointContrôleX, pointContrôleY, pointArrivéeX, pointArrivéeY

 ctx.beginPath();
 ctx.moveTo(100, 200);
 ctx.quadraticCurveTo(200, 120, 300, 200);
 ctx.fillStyle = '#e0e1f3';
 ctx.fill();
 // Courbe bas de la soucoupe volante
 ctx.beginPath();
 ctx.moveTo(100, 200);
 ctx.quadraticCurveTo(200, 270, 300, 200);
 ctx.fillStyle = '#e0e1f3';
 ctx.fill();

 ctx.fillStyle = "yellow";
 // function etoiles() {
     for(var i = 0; i < 50; i++) {
     let x = Math.random() * 400;
     let y = Math.random() * 400;
     let s = Math.random() * 3;
     ctx.beginPath();
     ctx.arc(x, y, s, 1, Math.PI * 2);
     ctx.fill();
    }
