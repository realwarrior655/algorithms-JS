//THIS ALGORITHM IS THE QUICKEST SORTING ARRAYS

export function QuickSort(items: number[]) {
  const length = items.length;

  if (length <= 1) {
    return items;
  }

  const PIVOT = items[0];
  const GREATER = [];
  const LESSER = [];

  for (let index = 1; index < length; index++) {
    if (items[index] > PIVOT) {
      GREATER.push(items[index]);
    } else {
      LESSER.push(items[index]);
    }
  }

  const sorted: number[] = [...QuickSort(LESSER), PIVOT, ...QuickSort(GREATER)];
  return sorted;
}

let unordenedList: number[] = [3, 5, 1, 2, 7, 6, 4, 10, 8, 9];

console.log(QuickSort(unordenedList));
