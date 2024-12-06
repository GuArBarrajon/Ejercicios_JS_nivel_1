/*
Ejercicio 15
Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el
aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y
el nuevo sueldo
*/

let sueldo = Number(prompt("Ingrese su sueldo: "));
let categoria = (prompt("Ingrese su categoria: ")).toUpperCase();
let aumento = 0;

if (categoria == "A") {
    aumento = sueldo * 0.1;
} else if (categoria == "B") {
    aumento = sueldo * 0.15;
} else if (categoria == "C") {
    aumento = sueldo * 0.2;
} else if (categoria == "D") {
    aumento = sueldo * 0.25;    
} else {
    aumento = 0;
}

let nuevoSueldo = sueldo + aumento; 
console.log(`Su nuevo sueldo es ${nuevoSueldo}`);