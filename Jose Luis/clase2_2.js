var c = document.getElementById("canvas");
if (c !== undefined && c.getContext) {
    var ancho = c.width;
    var alto = c.height;
    console.log("El ancho del canvas es ", ancho);
    console.log("El alto del canvas es ", alto);
    var context = c.getContext("2d");
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(ancho, alto);
    context.lineTo(0, alto);
    context.closePath();
    context.fill();
    context.stroke();
}
else
    console.log("No se pudo acceder al canvas");
