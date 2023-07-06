const arrayIntegers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sumOfIntegers = 0;

for (i = 1; i < arrayIntegers.length; i+=2) {

    sumOfIntegers += arrayIntegers[i];

}

console.log(sumOfIntegers);