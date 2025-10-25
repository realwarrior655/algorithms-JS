// QuickSort.js

export default function QuickSort(items) {
    var length = items.length;
    if (length <= 1) {
        return items;
    }
    var PIVOT = items[0];
    var GREATER = [];
    var LESSER = [];
    for (var index = 1; index < length; index++) {
        if (items[index] > PIVOT) {
            GREATER.push(items[index]);
        }
        else {
            LESSER.push(items[index]);
        }
    }
    return QuickSort(LESSER).concat([PIVOT], QuickSort(GREATER));
}

let unordenedList = [3, 5, 1, 2, 7, 6, 4, 10, 8, 9];
console.log(QuickSort(unordenedList));

//THIS ALGORITHM IS OF A O(logN) complexity.
