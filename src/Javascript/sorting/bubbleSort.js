//Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;
    // Atraviesa todos los elementos del arreglo
    for (let i = 0; i < n - 1; i++) {
        // El ultimo elemento ya esta en su lugar
        for (let j = 0; j < n - i - 1; j++) {
            // Intercambia si el elemento encontrado es mayor que el siguiente elemento
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let unordenedList = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unordenedList));

// Este algoritmo tiene una complejidad de O(n^2) en el peor y promedio de los casos, y O(n) en el mejor de los casos cuando el arreglo ya está ordenado.
