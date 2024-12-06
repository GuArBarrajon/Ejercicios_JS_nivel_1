/*
Ejercicio 5
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
con la frase "Tienes X años".
*/

let anioNacimiento = prompt("Ingrese su año de nacimiento: ");
let anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;
console.log(`Usted tiene ${edad} años`);