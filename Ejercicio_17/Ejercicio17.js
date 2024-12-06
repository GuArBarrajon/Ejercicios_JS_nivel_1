/*
Ejercicio 17
Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números
pueden ser iguales.
*/

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

if (num1 == num2 && num1 == num3) {
    console.log("Todos los números son iguales");
}else if ((num1 >= num2 && num1 > num3) || (num1 >= num3 && num1 > num2)) {    
    console.log(`${num1} es el mayor`);
}else if ((num2 >= num1 && num2 > num3) || (num2 >= num3 && num2 > num1)) {
    console.log(`${num2} es el mayor`);
}else {
    console.log(`${num3} es el mayor`);
}   