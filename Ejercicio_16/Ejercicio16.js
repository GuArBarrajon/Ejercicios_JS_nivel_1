/*
Ejercicio 16
Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la
matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y
la palabra “no aprobado” en caso contrario
*/

let matricula = parseInt(prompt("Ingrese la matrícula del alumno: "));
let suma = 0;

for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}: `));
    suma += calificacion;
}

let promedio = suma / 5;


console.log(`Matrícula: ${matricula}`);
console.log(`Promedio: ${promedio}`);

if (promedio >= 7) {
    console.log("Aprobado");
} else {
    console.log("No aprobado");
}