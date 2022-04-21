function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      // flip the coordinate frame
      ctx.save();
      flipY(ctx); 
      
      // calling functions to populate village
      drawTreeAt(ctx,200,50,90,20,30);
      drawTreeAt(ctx,100,60,90,20,30);
      drawTreeAt(ctx,50,25,90,20,30);
      drawTreeAt(ctx,340,65,90,20,30);
      drawTreeAt(ctx,365,25,90,20,30);
      drawTreeAt(ctx,265,115,90,20,30);
      drawHouseAt(ctx,200,50,30,40,10,6);
      drawHouseAt(ctx,90,30,30,40,10,6);
  
      ctx.restore();
    }
  }
  
  function drawTreeAt(ctx,x,y,height,width,radius) {
    ctx.beginPath();
    ctx.arc(x-25, y+150, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = "green";
    ctx.fill();
    
    ctx.fillStyle = "brown";
    ctx.fillRect(x-35, y+30, width, height);
  }
  
  function drawHouseAt(ctx,x,y,width,height,dx,dy) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y+50);
    ctx.lineTo(x+25, y+75)
    ctx.lineTo(x+50, y+50);
    ctx.lineTo(x+50, y);
    ctx.lineTo(x, y);
    ctx.moveTo(x+25, y+75);
    ctx.lineTo(x+40, y+85);
    ctx.lineTo(x+65, y+60);
    ctx.lineTo(x+65, y+10);
    ctx.lineTo(x+50, y);
    ctx.stroke();
  }
  
  // flipY moves the origin and flips the Y axis, so the coordinate system
  // is more familiar, with the origin (0,0) in the lower left corner
  function flipY(ctx) {
    var canvas = ctx.canvas;
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    ctx.translate(0,h);
    ctx.scale(1,-1);
  }