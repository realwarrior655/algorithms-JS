// Fibonacci

// Escribe una función recursiva para calcular el n-ésimo número de Fibonacci.
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(15)); //Número de Fibonacci en la posición 15

// Funcion Fibonacci que además de retornar el número de Fibonacci en la posición n, retorna la serie completa hasta esa posición

function fibonacciSequence(n) {
    // Manejo de casos base
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }

    // Inicializamos el array con los dos primeros números
    const sequence = [0, 1];

    // Empezamos el bucle desde el tercer número (índice 2)
    for (let i = 2; i < n; i++) {
        // El nuevo número es la suma de los dos anteriores en el array
        const nextFib = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFib);
    }

    return sequence;
}

// Ejemplo de uso: Generar los primeros 10 números de Fibonacci
console.log(fibonacciSequence(15));
// Resultado: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Fibonacci con operador ternario

function fibonacciTernary(n) {
    return n <= 0 ? 0 : n === 1 ? 1 : fibonacciTernary(n - 1) + fibonacciTernary(n - 2);
}
console.log(fibonacciTernary(15)); //Número de Fibonacci en la posición 15