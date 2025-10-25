//Insertion Sort

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Mueve los elementos de arr[0..i-1], que son mayores que la clave,
        // a una posición adelante de su posición actual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
let unordenedList = [12, 11, 13, 5, 6];
console.log(insertionSort(unordenedList));

// Este algoritmo tiene una complejidad de O(n^2) en el peor y promedio de los casos, pero es eficiente para conjuntos de datos pequeños o casi ordenados.