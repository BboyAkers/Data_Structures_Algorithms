// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //My First Solution
    // return str.split('').reverse().join('');
   
    //My Second Solution
    // let reversedArray = '';
    // for( let character of str){
    //     reversedArray = character + reversed;
    // }
    // return reversedArray;

    //My Third Solution
    str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '')
}

module.exports = reverse;
