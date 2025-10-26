// Factorial

//primera forma: INTERACTIVA

function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1


//segunda forma: RECURSIVA

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

//tercera forma: RECURSIVA CON OPERADOR TERNARIO

function factorial(n) {
    return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
}

//--- El factorial de un número n es el producto de todos los enteros positivos desde 1 hasta n. (n!=n×(n−1)!)