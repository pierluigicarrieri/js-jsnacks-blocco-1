// Adds missing elements from array1 to array2

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "ciao a tutti"];
const array2 = [1, 2, 3, 4, 5];

for (i = array2.length; i < array1.length; i++) {

    array2.push(array1[i]);

}

console.log(array1);
console.log(array2);