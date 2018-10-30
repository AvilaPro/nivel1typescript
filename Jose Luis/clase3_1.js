var Circulo = /** @class */ (function () {
    function Circulo(contexto) {
        this._nombre = "Circulo";
        this.radio = Math.random() * 100 + 20;
        this._x = Math.random() * 250 + 10;
        this._y = Math.random() * 250 + 10;
        this._color = "yellow";
        this.contexto = contexto;
    }
    Circulo.prototype.pintar = function () {
        this.contexto.fillStyle = this._color;
        this.contexto.arc(this._x, this._y, this.radio, 0, Math.PI * 2);
        this.contexto.fill();
        this.contexto.stroke();
    };
    Circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Circulo.prototype.getRadio = function () {
        return this.radio;
    };
    Object.defineProperty(Circulo.prototype, "color", {
        get: function () {
            return this._color.toUpperCase();
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    return Circulo;
}());
var canvas = document.getElementById("canvas");
if (canvas.getContext) {
    var c = new Circulo(canvas.getContext("2d"));
    //c.nombre="ssss"; // no se puede
    c.pintar();
    c.color = "red"; // se usa el setter implicito
    c.setRadio(20); // se usa el setter explicito
    console.log("El color es ", c.color); // getter implicito
    console.log("El radio es ", c.getRadio()); // getter explicito
}
