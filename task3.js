/* Write a recursive function to compute the sum of all elements in an array.
const numbers = [1, 2, 3, 4, 5];

function sumRecursive(numbers){
    if(numbers.length === 0) return 0
    return numbers.pop() + sumRecursive(numbers)
}

console.log(sumRecursive(numbers))

*/ 

function recursives(numbers){
    if(numbers.length === 0) return 0
    return numbers.pop + recursives(numbers)
}
console.log(recursives(numbers))