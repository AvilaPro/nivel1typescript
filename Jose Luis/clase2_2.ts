
var c:any = document.getElementById("canvas");
if (c!==undefined && c.getContext){
    let ancho:number = c.width;
    let alto:number = c.height;
    console.log("El ancho del canvas es ",ancho);
    console.log("El alto del canvas es ",alto);
    var context:CanvasRenderingContext2D =c.getContext("2d");
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(ancho,alto);
    context.lineTo(0,alto);
    context.closePath();
    context.fill();
    context.stroke();
}else
    console.log("No se pudo acceder al canvas")