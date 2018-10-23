function pintarCirculo(p1, radio, contexto, relleno) {
    if (relleno === void 0) { relleno = false; }
    //contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.arc(p1.x, p1.y, radio, 0, Math.PI * 2);
    if (relleno) {
        contexto.fillStyle = "white";
        contexto.fill();
    }
    contexto.closePath();
    contexto.stroke();
}
function pintarTriangulo(p1, p2, p3, contexto, relleno) {
    if (relleno === void 0) { relleno = false; }
    contexto.beginPath();
    contexto.moveTo(p1.x, p1.y);
    contexto.lineTo(p2.x, p2.y);
    contexto.lineTo(p3.x, p3.y);
    if (relleno)
        contexto.fill();
    contexto.closePath();
    contexto.stroke();
}
var c1 = document.getElementById("canvas1");
var c2 = document.getElementById("canvas2");
if (c1 !== undefined && c1.getContext) {
    var ancho = c1.width;
    var alto = c1.height;
    var ctx1 = c1.getContext("2d");
    var ctx2 = c2.getContext("2d");
    for (var i = 1; i <= 10; i++) {
        pintarCirculo({ x: i * 50, y: i * 50 }, 20, ctx2, i % 2 == 0);
    }
    pintarTriangulo({ x: 0, y: 0 }, { x: ancho, y: alto }, { x: 0, y: alto }, ctx1, true);
    pintarTriangulo({ x: 50, y: 50 }, { x: ancho, y: 0 }, { x: 0, y: alto }, ctx2, false);
}
else
    console.log("No se pudo acceder al canvas");
