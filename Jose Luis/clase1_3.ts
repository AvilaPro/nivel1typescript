
function calcular_bono(monto:number,porc=10,x?:boolean):number{
    if (x==undefined)
        x=false;
        
    if (monto>1000)
        return monto+=monto*porc/100;
    else
        return monto;
}
var a: number
var b: number
var c: number
a=calcular_bono(1500)
b=calcular_bono(1500,20)
c=calcular_bono(1500,25,false)

console.log("El valor de A es: ",a)
console.log("El valor de B es: ",b)
console.log("El valor de C es: ",c)