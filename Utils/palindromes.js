export default function isItpalindrome(data) {
    const reference = data.split("").reverse().join("");
    if (reference === data) {
        return data + " is a palindrome";
    }
    else
        return data + " is not a palindrome";
}
console.log(isItpalindrome("people"));
