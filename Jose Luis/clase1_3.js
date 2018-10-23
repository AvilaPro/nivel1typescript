function calcular_bono(monto, porc, x) {
    if (porc === void 0) { porc = 10; }
    if (x == undefined)
        x = false;
    if (monto > 1000)
        return monto += monto * porc / 100;
    else
        return monto;
}
var a;
var b;
var c;
a = calcular_bono(1500);
b = calcular_bono(1500, 20);
c = calcular_bono(1500, 25, false);
console.log("El valor de A es: ", a);
console.log("El valor de B es: ", b);
console.log("El valor de C es: ", c);
