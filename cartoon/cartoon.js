function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "	#F0FFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.save(); 
      
    // calling functions to populate village
    drawTreeAt(ctx,700,350,90,20,30);
    drawTreeAt(ctx,600,360,90,20,30);
    drawTreeAt(ctx,550,325,90,20,30);
    drawTreeAt(ctx,840,365,90,20,30);
    drawTreeAt(ctx,765,415,90,20,30);
    drawHouseAt(ctx,800,500);
    drawHouseAt(ctx,620,450);
    drawSunAt(ctx,670,150,70);
    drawCloudAt(ctx,100,135);
    drawCloudAt(ctx,800,150);
    drawCloudAt(ctx,1000,120);
    drawCloudAt(ctx,300,165);
    drawCloudAt(ctx,1230,200);
  
    ctx.restore();
  }
}
  
function drawTreeAt(ctx,x,y,height,width,radius) {
  ctx.beginPath();
  // draws top of tree
  ctx.arc(x-25, y, radius, 0, Math.PI * 2, true);
  ctx.fillStyle = "green";
  ctx.fill();
  // draws tree trunk
  ctx.fillStyle = "brown";
  ctx.fillRect(x-35, y+30, width, height);
}
  
function drawHouseAt(ctx,x,y) {
  ctx.beginPath();
  // draws front structure
  ctx.moveTo(x, y);
  ctx.lineTo(x-25, y+35);
  ctx.lineTo(x-25, y+85);
  ctx.lineTo(x+25, y+85);
  ctx.lineTo(x+25, y+35);
  ctx.lineTo(x, y);
  // draws side structure
  ctx.moveTo(x, y);
  ctx.lineTo(x+15, y-10);
  ctx.lineTo(x+40, y+25);
  ctx.lineTo(x+40, y+70);
  ctx.lineTo(x+25, y+85);
  ctx.stroke();
}

function drawSunAt(ctx,x,y,radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.fillStyle = "#f9d71c";
  ctx.fill();
}

function drawCloudAt(ctx,x,y) {
  ctx.beginPath();
  ctx.arc(x, y, 40, Math.PI * 0.5, Math.PI * 1.5);
  ctx.arc(x+50, y-40, 50, Math.PI * 1, Math.PI * 1.85);
  ctx.arc(x+132, y-25, 40, Math.PI * 0.5, Math.PI * 1.91);
  ctx.arc(x+175, y+5, 40, Math.PI * 1.5, Math.PI * 0.35);
  ctx.moveTo(x+175, y+40);
  ctx.lineTo(x, y+40);
  ctx.strokeStyle = '#797874';
  ctx.stroke();
  ctx.fillStyle = '#8ED6FF';
  ctx.fill()
}