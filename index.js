//MyMap
function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const words = ["apple", "banana", "kiwi", "mango"];

const wordLengths = myMap(words, function(word) {
    return word.length;
});
//myForEach
console.log(wordLengths); 

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const fruits = ["apple", "banana", "kiwi", "mango"];

myForEach(fruits, function(fruit, index) {
    console.log(`${index}: ${fruit}`);
});

