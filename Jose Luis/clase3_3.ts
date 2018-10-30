
class Figura{
    private _x:number
    private _y:number
    protected _color:string
    protected _context :CanvasRenderingContext2D

    public get x(){
        return this._x;
    }
    public get y(){
        return this._y;
    }
    public set color(color:string){
        this._color=color;
    }
    public get color(){
        return this._color;
    }
    constructor(context:CanvasRenderingContext2D, 
                x?:number,y?:number){
        if (x==undefined )
            this._x = Math.random()*250+20;
        else
            this._x = x;
        this._y = (y==undefined)?Math.random()*250 : y;
        this._context = context;
    }
}
class Triangulo extends Figura{
    private _tamLados : number

    public dibujar(){
        this._context.fillStyle=this.color;
        this._context.beginPath();
        this._context.moveTo(this.x,this.y);
        this._context.lineTo(this.x,this.y+this._tamLados);
        this._context.lineTo(this.x+this._tamLados,this.y+this._tamLados);
        this._context.closePath();
        this._context.fill();
        this._context.stroke();
    }
    constructor(contexto:CanvasRenderingContext2D ,
                tamLados:number){
        super(contexto);
        this._tamLados = tamLados
    }
}
var canvas:any=document.getElementById("canvas");
if (canvas.getContext){

    var t:Triangulo =new Triangulo(canvas.getContext("2d"),Math.random()*500)
    t.color = "red" // se usa el setter implicito
    t.dibujar();
    
}