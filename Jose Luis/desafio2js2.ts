interface Punto {
    x:number,
    y:number
}

function pintarCirculo(p1:Punto,radio:number,
    contexto:CanvasRenderingContext2D,
    relleno:boolean=false){
    //contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.arc(p1.x,p1.y,radio,0,Math.PI*2);
    if (relleno){
        contexto.fillStyle="#FFEB3B";
        contexto.fill();
    }
    contexto.closePath();
    contexto.stroke();
}
function pintarRectangulo(p1:Punto,p2:Punto,contexto:CanvasRenderingContext2D,relleno:boolean=false){
    contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.lineTo(p1.x,p1.y+p2.y);
    contexto.lineTo(p1.x+p2.x,p1.y+p2.y);
    contexto.lineTo(p1.x+p2.x,p1.y);
    contexto.lineTo(p1.x,p1.y);
    if(relleno)
        contexto.fillStyle="blue";
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
}
function pintarRectangulo2(p1:Punto,p2:Punto,contexto:CanvasRenderingContext2D,relleno:boolean=false){
    contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.lineTo(p1.x,p1.y+p2.y);
    contexto.lineTo(p1.x+p2.x,p1.y+p2.y);
    contexto.lineTo(p1.x+p2.x,p1.y);
    contexto.lineTo(p1.x,p1.y);
    if(relleno)
        contexto.fillStyle="lightblue";
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
}
function pintarRectangulo3(p1:Punto,p2:Punto,contexto:CanvasRenderingContext2D,relleno:boolean=false){
    contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.lineTo(p1.x,p1.y+p2.y);
    contexto.lineTo(p1.x+p2.x,p1.y+p2.y);
    contexto.lineTo(p1.x+p2.x,p1.y);
    contexto.lineTo(p1.x,p1.y);
    if(relleno)
        contexto.fillStyle="red";
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
}
function pintarHexagono(p1:Punto,p2:Punto,contexto:CanvasRenderingContext2D,relleno:boolean=false){
    contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.lineTo(p1.x-((p2.x)/2),p1.y+p2.y);
    contexto.lineTo(p1.x,p1.y+(2*p2.y));
    contexto.lineTo(p1.x+p2.x,p1.y+(2*p2.y));
    contexto.lineTo(p1.x+(p2.x+((p2.x)/2)),p1.y+p2.y);
    contexto.lineTo(p1.x+p2.x,p1.y);
    contexto.lineTo(p1.x,p1.y);
    if(relleno)
        contexto.fillStyle="pink";
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
}
function pintarOctagono(p1:Punto,p2:Punto,contexto:CanvasRenderingContext2D,relleno:boolean=false){
    contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.lineTo(p1.x-p2.x,p1.y+p2.y);
    contexto.lineTo(p1.x-p2.x,p1.y+28.28+p2.y);
    contexto.lineTo(p1.x,p1.y+28.28+p2.y+p2.y);
    contexto.lineTo(p1.x+28.28,p1.y+p2.y+28.28+p2.y);
    contexto.lineTo(p1.x+28.28+p2.x,p1.y+p2.y+28.28);
    contexto.lineTo(p1.x+28.28+p2.x,p1.y+p2.y);
    contexto.lineTo(p1.x+28.28,p1.y);
    contexto.lineTo(p1.x,p1.y);
    if(relleno)
        contexto.fillStyle="#B285FF";
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
}
function pintarTriangulo(p1:Punto,p2:Punto,contexto:CanvasRenderingContext2D,relleno:boolean=false){
    contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.lineTo(p1.x,p1.y+p2.y);
    contexto.lineTo(p1.x+p2.x,p1.y+p2.y);
    contexto.lineTo(p1.x,p1.y);
    if(relleno)
        contexto.fillStyle="orange";
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
}
function pintarPentagono(p1:Punto,p2:Punto,contexto:CanvasRenderingContext2D,relleno:boolean=false){
    contexto.moveTo(p1.x,p1.y);
    contexto.beginPath();
    contexto.lineTo(p1.x-p2.x,p1.y+p2.y);
    contexto.lineTo((p1.x-p2.x)+p2.y,p1.y+p2.y+p2.x);
    contexto.lineTo((p1.x+p2.x)-p2.y,p1.y+p2.y+p2.x);
    contexto.lineTo(p1.x+p2.x,p1.y+p2.y);
    contexto.lineTo(p1.x,p1.y);
    if(relleno)
        contexto.fillStyle="lightgreen";
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
}
class Tren{
    nombre:string
    a:number
    b:number

    hacerTren(){
        pintarRectangulo3({x:this.a-60,y:this.b-50},{x:510,y:20},ctx1,true);
        pintarRectangulo({x:this.a-40,y:this.b-100},{x:80,y:80},ctx1,true);
        pintarCirculo({x:this.a,y:this.b},40,ctx1,true);
        pintarHexagono({x:this.a-20,y:this.b-(169.28)},{x:40,y:34.64},ctx1,true);
        pintarRectangulo({x:this.a+120,y:this.b-100},{x:80,y:80},ctx1,true);
        pintarCirculo({x:this.a+160,y:this.b},40,ctx1,true);
        pintarRectangulo({x:this.a+280,y:this.b-100},{x:80,y:80},ctx1,true);
        pintarCirculo({x:this.a+320,y:this.b},40,ctx1,true);
        pintarRectangulo({x:this.a+450,y:this.b-180},{x:140,y:160},ctx1,true);
        pintarCirculo({x:this.a+520,y:this.b-20},60,ctx1,true);
        pintarRectangulo2({x:this.a+490,y:this.b-150},{x:60,y:60},ctx1,true);
        pintarRectangulo2({x:this.a+430,y:this.b-210},{x:180,y:30},ctx1,true);
        pintarRectangulo3({x:this.a+590,y:this.b-140},{x:120,y:120},ctx1,true);
        pintarCirculo({x:this.a+620,y:this.b+10},30,ctx1,true);
        pintarCirculo({x:this.a+680,y:this.b+10},30,ctx1,true);
        pintarRectangulo2({x:this.a+650,y:this.b-170},{x:30,y:30},ctx1,true);
        pintarRectangulo2({x:this.a+635,y:this.b-220},{x:60,y:50},ctx1,true);
        pintarTriangulo({x:this.a+710,y:this.b-100},{x:80,y:80},ctx1,true);
        pintarPentagono({x:this.a+160,y:this.b-160},{x:40,y:20},ctx1,true);
        pintarOctagono({x:this.a+300,y:this.b-168.28},{x:20,y:20},ctx1,true);
        

    }
}

var c1:any = document.getElementById("canvas1");
if(c1!==undefined && c1.getContext){
    let ancho:number = c1.width;
    let alto:number = c1.height;

    var ctx1:CanvasRenderingContext2D =c1.getContext("2d");

}

let T :Tren
T = new Tren()
T.a=70
T.b=650
T.hacerTren()
