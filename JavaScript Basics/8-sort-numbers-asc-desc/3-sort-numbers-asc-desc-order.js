// Sort numbers in ascending and descending order - Selection sort => Bad performance
const sortNumbersAsc = (arr) => {
    const arrayCopy = [...arr];

    for (let i = 0; i <  arrayCopy.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrayCopy.length; j++) {
            if (arrayCopy[j] < arrayCopy[minIndex]) {
                minIndex = j;
            }
        }
        [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
    }
    return arrayCopy;
}

console.log(sortNumbersAsc([1, -4, 5, 7, 98, 3, 3, 2, 56, -32]))
