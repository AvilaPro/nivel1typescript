
var antig:number
var hijo:number
var n:number
var i:number
var salario

function bono_antiguedad(antiguedad:number, hijos:number,salario_base=1800){
    salario_base=salario_base*hijos;
    if (antiguedad>5)
        salario_base=salario_base*1.125;
    if (hijos>3)
        salario_base=salario_base+((hijos-3)*500);
    return salario_base;    
}

n=Math.ceil(Math.random()*3);
console.log("Numero de empleados: "+n);
for (i=1 ;i<=n ;i++) {
    antig=Math.ceil(Math.random()*10)
    hijo=Math.ceil(Math.random()*6)
    salario=bono_antiguedad(antig,hijo)
    console.log("años de antiguedad de trabajor del trabajador "+i+" :"+antig)
    console.log("numero de hijos del trabajador "+i+" :"+hijo)
    console.log("salario correspondiente del trabajador "+i+" :"+salario)
}
/*Debe ejecutarlo por consola con el uso de node*/