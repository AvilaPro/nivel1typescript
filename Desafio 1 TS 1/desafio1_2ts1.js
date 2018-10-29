var antig;
var hijo;
var n;
var i;
var salario;
function bono_antiguedad(antiguedad, hijos, salario_base) {
    if (salario_base === void 0) { salario_base = 1800; }
    salario_base = salario_base * hijos;
    if (antiguedad > 5)
        salario_base = salario_base * 1.125;
    if (hijos > 3)
        salario_base = salario_base + ((hijos - 3) * 500);
    return salario_base;
}
n = prompt("Ingrese el numero de empleados a ser procesados: ");
console.log("Numero de empleados: " + n);
for (i = 1; i <= n; i++) {
    antig = prompt("Ingrese el numero de años de trabajo del trabajador " + i + " :");
    hijo = prompt("Ingrese el numero de hijos del trabajador " + i + " :");
    salario = bono_antiguedad(antig, hijo);
    console.log("años de antiguedad de trabajor del trabajador " + i + " :" + antig);
    console.log("numero de hijos del trabajador " + i + " :" + hijo);
    console.log("salario correspondiente del trabajador " + i + " :" + salario);
}
