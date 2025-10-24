function fizzbuzz(n) {
    if (typeof n !== 'number' || n <= 0) {
        throw new Error('Input must be a positive integer');
    }

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }

}

console.log(fizzbuzz(15)); // FizzBuzz