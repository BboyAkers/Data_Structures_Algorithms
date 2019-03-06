// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {


    //My First Solution
    // const reversedString = str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // });
    
    // if(str === reversedString ){
    //     return true
    // }

    //My Second Solution
    // const reversed = str.split('').reverse().join('');
    // if(str === reversed){
    //     return true
    // }
    // return false

    //Third Solution, learned online
    //not a vaiable solution due to the simple fact that it compares both begging and end all the way through the middle
    // return str.split('').every((character, i) => {
    //     return character == str[str.length -i -1];
    // });
}

module.exports = palindrome;
