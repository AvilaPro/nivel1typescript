class Elemento {
    get context() {
        return this._context;
    }
    set context(context) {
        this._context = context;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    constructor(context, color) {
        if (color == "" || color == null)
            this._color = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
        else
            this._color = color;
        this._context = context;
    }
}
class Estrella extends Elemento {
    set x(x) {
        this._x = x;
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = y;
    }
    get y() {
        return this._y;
    }
    constructor(context, color) {
        super(context, color);
        this._x = 50 + Math.round(Math.random() * screen.availWidth - 100);
        this._y = 20 + Math.round(Math.random() * 200);
    }
}
class EstrellaPunteada extends Estrella {
    constructor(context, color) {
        super(context, color);
    }
    pintar() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.context.lineTo(this.x + 15, this.y + 55);
        this.context.lineTo(this.x + 65, this.y + 55);
        this.context.lineTo(this.x + 13, this.y + 90);
        this.context.lineTo(this.x + 35, this.y + 160);
        this.context.lineTo(this.x, this.y + 110);
        this.context.lineTo(this.x - 35, this.y + 160);
        this.context.lineTo(this.x - 13, this.y + 90);
        this.context.lineTo(this.x - 65, this.y + 55);
        this.context.lineTo(this.x - 15, this.y + 55);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
        this.context.stroke();
    }
}
class EstrellaRedonda extends Estrella {
    constructor(context, color) {
        super(context, color);
    }
    pintar() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y + 38 / 2);
        this.context.lineTo(this.x + 38 + 23, this.y);
        this.context.lineTo(this.x, this.y - 38 / 2);
        this.context.lineTo(this.x - 38 - 23, this.y);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(this.x, this.y + 38 + 23);
        this.context.lineTo(this.x + 38 / 2, this.y);
        this.context.lineTo(this.x, this.y - 38 - 23);
        this.context.lineTo(this.x - 38 / 2, this.y);
        this.context.fill();
        this.context.closePath();
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(this.x, this.y, 24, 0, Math.PI * 2);
        this.context.fill();
        this.context.closePath();
        this.context.stroke();
    }
}
class cielo extends Elemento {
    constructor(context, color) {
        super(context, color);
    }
    pintarCielo() {
        let x = Math.random() * 30;
        let color = "darkblue";
        context.fillStyle = color;
        context.fillRect(0, 0, screen.availWidth, 700);
        context.fill();
        context.stroke();
        for (let i = 0; i < x; i++) {
            var starPunteada = new EstrellaPunteada(context, "");
            var starRedonda = new EstrellaRedonda(context, "");
            starPunteada.pintar();
            starRedonda.pintar();
        }
    }
}
var canvas = document.getElementById("canvas");
var ancho = screen.availWidth;
var largo = screen.availHeight;
canvas.width = ancho;
canvas.height = largo;
var context = canvas.getContext("2d");
if (canvas != undefined && canvas.getContext) {
    console.log("El canvas fue encontrado");
    var cielo1 = new cielo(context);
    cielo1.pintarCielo();
}
else
    console.log("No se encontro el canvas");
