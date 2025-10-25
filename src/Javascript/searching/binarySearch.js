

//recursivo
export default function binarySearchRecursive(arr, x, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    var mid = Math.floor(low + (high - low) / 2);
    if (high >= low) {
        if (arr[mid] === x) {
            return mid;
        }
        if (x < arr[mid]) {
            return binarySearchRecursive(arr, x, low, mid - 1);
        }
        else {
            return binarySearchRecursive(arr, x, mid + 1, high);
        }
    }
    else {
        return "The item has been not found";
    }
}
//interactivo
export default function binarySearchInteractive(arr, x, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    while (high >= low) {
        var mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === x) {
            return mid;
        }
        if (x < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return "The item has been not found";
}
