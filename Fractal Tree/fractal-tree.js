// Set up canvas for drawing
var canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 500;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#000';
ctx.lineWidth = 1;
// constants
var degToRad = Math.PI / 180.0;
var totalDepth = 9;
/** Helper function that draws a line on the canvas */
function drawLine(x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
}
/** Draws a branch at the given point and angle and then calls itself twice */
function drawTree(x1, y1, angle, depth) {
    if (depth !== 0) {
        var x2 = x1 + (Math.cos(angle * degToRad) * depth * 10.0);
        var y2 = y1 + (Math.sin(angle * degToRad) * depth * 10.0);
        drawLine(x1, y1, x2, y2);
        drawTree(x2, y2, angle - 20, depth - 1);
        drawTree(x2, y2, angle + 20, depth - 1);
    }
}
// actual drawing of tree
ctx.beginPath();
drawTree(300, 500, -90, totalDepth);
ctx.closePath();
ctx.stroke();
