// Operaciones
const operaciones = {
    1: (a, b) => parseInt(a) + parseInt(b),
    2: (a, b) => parseInt(a) - parseInt(b),
    3: (a, b) => parseInt(a) * parseInt(b),
    4: (a, b) => b != 0 ? parseInt(a) / parseInt(b) : "No se puede dividir por 0",
};

// Solicitar operación
alert('¿Qué operación deseas realizar?');
let operacion = prompt("1 Suma     2 Resta     3 Multiplicación     4 División");

if (operaciones[operacion]) {
    let a = prompt("Ingresa el primer número: ");
    let b = prompt("Ingresa el segundo número: ");
    
    // Validar que las entradas sean números
    if (isNaN(a) || isNaN(b)) {
        alert("Por favor ingresa valores numéricos válidos.");
    } else {
        let resultado = operaciones[operacion](a, b);
        alert(`Tu resultado es: ${resultado}`);
    }
} else {
    alert("Operación no válida.");
}
