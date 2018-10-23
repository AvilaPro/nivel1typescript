function calcularSueldo(x) {
    if (x.edad > 18)
        return 100;
    else
        return x.edad * 5;
}
var p = {
    nombre: "Eduardo Mejias",
    edad: 30,
    sexo: "masculino"
};
console.log("El valor del sueldo es ", calcularSueldo(p));
p.edad = 15;
console.log("El valor del sueldo es ", calcularSueldo(p));
