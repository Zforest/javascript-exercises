/*
Create a function that takes an array as the first argument.
Then the function removes from the array whatever is entered as the second argument.

determine if element in array matches second argument
    if yes remove element
        find element position (for each loop)
        note position (length)
        remove position (splice)
        return array
    if no return no matching results
*/

const removeFromArray = function(array, removeNum) {
    array.forEach(num => array.splice(array.indexOf(removeNum))); 
    return array;
        }
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
