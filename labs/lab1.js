var fruit = [
    {name:"Apple", quantity:20, color:"red"},
    {name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:3, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:8, color:"purple"}
];

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var section = Math.floor(canvas.width / fruit.length);
        var barWidth = section;
        var x = 0;
        var unit = 20;

        for(var i in fruit){
            ctx.beginPath();

            // assign bar colors
            var fruitColor = fruit[i].color;
            ctx.fillStyle = fruitColor;
            // calculate bar height
            var barHeight = fruit[i].quantity*unit;
            // define bar measurements
            ctx.fillRect(x+2, canvas.height-barHeight, barWidth, barHeight);

            // text labels
            ctx.font = "20px Georgia";
            ctx.fillStyle = "#000000";
            ctx.fillText(fruit[i].quantity, x+20, canvas.height-33);
            ctx.fillText(fruit[i].name, x+20, canvas.height-10);

            x += section;
        }
    }
}