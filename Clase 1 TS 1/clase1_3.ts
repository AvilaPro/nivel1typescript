function calcular_bono(monto:number,porc=10):number{
    if(monto>1000)
        return monto+=monto*porc/100;
    else
        return monto;
}
var a:number
var b:number
a=calcular_bono(1500)
b=calcular_bono(1500,20)

console.log("El valor de A es: ",a)
console.log("EL valor de B es: ",b)

