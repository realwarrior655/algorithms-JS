// Merge Sort

function mergeSort(arr) {
    //Caso base: si el arreglo tiene 1 o 0 elementos, ya está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    //Defino el array resultado y los indices para left y right
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //Comparo los elementos de left y right y los agrego al resultado en orden
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        // Si el elemento de right es menor o igual, lo agrego al resultado
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let unordenedList = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(unordenedList));

// Este algoritmo tiene una complejidad de O(n log n) en el peor, promedio y mejor de los casos.