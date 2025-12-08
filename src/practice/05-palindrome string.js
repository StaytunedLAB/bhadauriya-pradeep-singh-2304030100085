function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    if (str === reversed) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
