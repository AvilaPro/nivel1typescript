var Figura = /** @class */ (function () {
    function Figura() {
    }
    Figura.prototype.mostrarInformacion = function () {
        console.log("hola mundo");
        console.log("Estoy en X:", this.x, ",Y:", this.y);
    };
    return Figura;
}());
var a = new Figura();
a.x = 50;
a.y = 20;
a.mostrarInformacion();
