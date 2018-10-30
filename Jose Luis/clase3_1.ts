
class Circulo{
    private radio:number
    private _color:string
    readonly _nombre:string = "Circulo";
    private contexto:CanvasRenderingContext2D;
    private _x:number
    private _y:number

    constructor(contexto:CanvasRenderingContext2D){
        this.radio = Math.random()*100+20;
        this._x = Math.random()*250+10;
        this._y = Math.random()*250+10;
        this._color = "yellow";
        this.contexto = contexto;
    }
    public pintar(){
        this.contexto.fillStyle=this._color
        this.contexto.arc(this._x,this._y,this.radio,0,Math.PI*2)
        this.contexto.fill();
        this.contexto.stroke();
    }
    public setRadio( radio:number){
        this.radio=radio;
    }
    public getRadio(){
        return this.radio;
    }
    public get color(){
        return this._color.toUpperCase();
    }
    public set color(color:string){
        this._color=color
    }
}
var canvas:any=document.getElementById("canvas");
if (canvas.getContext){

    var c:Circulo =new Circulo(canvas.getContext("2d"))
    //c.nombre="ssss"; // no se puede
    c.pintar();
    c.color = "red" // se usa el setter implicito
    c.setRadio(20)  // se usa el setter explicito
    console.log("El color es ",c.color) // getter implicito
    console.log("El radio es ",c.getRadio()) // getter explicito
}
