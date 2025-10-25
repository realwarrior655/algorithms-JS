// Jump Search

function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;

    // Encontrar el bloque donde puede estar el objetivo
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        if (prev >= n) {
            return -1; // Target not found
        }
        step += Math.floor(Math.sqrt(n));
    }

    // Busqueda lineal en el bloque encontrado
    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) {
            return i; // 
        }
    }

    return -1; // Target not found
}

