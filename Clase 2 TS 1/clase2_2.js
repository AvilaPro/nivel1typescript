var c = document.getElementById("canvas");
if (c !== undefined && c.getContext) {
    var context = c.getContext("2d");
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(300, 150);
    context.lineTo(300, 0);
    context.closePath();
    context.fill();
    context.stroke();
}
else
    console.log("No se pudo acceder al canvas");
