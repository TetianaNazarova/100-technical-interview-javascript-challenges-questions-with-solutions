// Sort numbers in ascending and descending order - Bubble sort  => Bad performance
const sortNumbersAsc = (arr) => {
    const arrayCopy = [...arr];

    for (let i = 0; i <  arrayCopy.length - 1; i++) {
        for (let j = 0; j < arrayCopy.length - 1 - i; j++) {
            if (arrayCopy[j] > arrayCopy[j + 1]) {
                const temp = arrayCopy[j];
                arrayCopy[j] = arrayCopy[j + 1];
                arrayCopy[j + 1] = temp;
            }
        }
    }
    return arrayCopy;
}

console.log(sortNumbersAsc([1, -4, 5, 7, 98, 3, 3, 2, 56, -32]))

