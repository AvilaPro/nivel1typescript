var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figura = /** @class */ (function () {
    function Figura(context, x, y) {
        if (x == undefined)
            this._x = Math.random() * 250 + 20;
        else
            this._x = x;
        this._y = (y == undefined) ? Math.random() * 250 : y;
        this._context = context;
    }
    Object.defineProperty(Figura.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    return Figura;
}());
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(contexto, tamLados) {
        var _this = _super.call(this, contexto) || this;
        _this._tamLados = tamLados;
        return _this;
    }
    Triangulo.prototype.dibujar = function () {
        this._context.fillStyle = this.color;
        this._context.beginPath();
        this._context.moveTo(this.x, this.y);
        this._context.lineTo(this.x, this.y + this._tamLados);
        this._context.lineTo(this.x + this._tamLados, this.y + this._tamLados);
        this._context.closePath();
        this._context.fill();
        this._context.stroke();
    };
    return Triangulo;
}(Figura));
var canvas = document.getElementById("canvas");
if (canvas.getContext) {
    var t = new Triangulo(canvas.getContext("2d"), Math.random() * 500);
    t.color = "red"; // se usa el setter implicito
    t.dibujar();
}
