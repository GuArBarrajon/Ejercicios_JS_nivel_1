/*
Ejercicios 11
Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro.
*/

let base = prompt("Ingrese la base del triángulo: ");
let altura = prompt("Ingrese la altura del triángulo: ");
let superficie = (base * altura) / 2;
let perimetro = base * 3;
console.log(`La superficie del triángulo es ${superficie} y el perímetro es ${perimetro}`);