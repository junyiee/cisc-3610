document.addEventListener('DOMContentLoaded', init);

var canvas, ctx, img, button, frames, count;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    img = new Image();
    img.src = 'numbers/spritesheet.png';

    frames = numbers.frames;
    drawNumber([0]);

    button = document.getElementById('start');
    button.addEventListener('click', startAnim);
}

function startAnim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    count = 0;
    button.disabled = true;

    var timer = setInterval(() =>
    {
        if(count >= frames.length)
        {
            clearInterval(timer);
            button.disabled = false;
        }
        drawNumber(count.toString().split('').map(Number));
        count++;
    }, 500);
}

function drawNumber(numbers = []) {
    numbers.reverse().forEach((num, i) =>
    {
        var fNum = frames[num];
        ctx.drawImage(
            img,
            fNum.frame.x,
            fNum.frame.y,
            fNum.frame.w,
            fNum.frame.h,
            numbers.length > 1 ? canvas.width / 2 - (fNum.frame.w * i) : canvas.width / 4,
            0,
            fNum.sourceSize.w,
            fNum.sourceSize.h);
    });
}