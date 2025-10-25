// Linear Search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Objectivo encontrado
        }
    }
    return -1; // Objectivo no encontrado
}