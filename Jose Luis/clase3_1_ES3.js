var Circulo = /** @class */ (function () {
    function Circulo() {
    }
    Circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Circulo.prototype.getRadio = function () {
        return this.radio;
    };
    return Circulo;
}());
var c = new Circulo();
//c.color = "red"
c.setRadio(20);
