const reverseString = function(string) {
    word = string.split('');
    wordLength = word.length;
    reverseMe = word.slice(0, wordLength);
    reversedArray = reverseMe.reverse();
    reversedString = reversedArray.toString();
    return reversedString;
    };
    reverseString('Hello');

// Do not edit below this line
module.exports = reverseString;
