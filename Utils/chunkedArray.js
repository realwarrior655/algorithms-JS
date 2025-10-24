function chunkedArray(array, size) {
    if (!Array.isArray(array) || size <= 0) {
        throw new Error('Invalid input: array must be an array and size must be a positive integer.');
    }
    //this new const is used to store the result of the chunked array
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,], 2)); // [[1, 2], [3, 4], [5]]