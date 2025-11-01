function twoSum(numbers, target) {

    if (numbers.length < 2) {
        return null
    } else {

        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {

                    return [i, j];
                }
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]