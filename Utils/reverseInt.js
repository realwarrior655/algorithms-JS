

export default function reverseInt(data) {

    const reference = data.toString().split("").reverse().join("");
    const newNumber = parseInt(reference);
    if (newNumber < 0) {
        return -newNumber;
    } else {
        return newNumber;
    }
}
console.log(reverseInt(-579018237));
console.log(reverseInt(12345));