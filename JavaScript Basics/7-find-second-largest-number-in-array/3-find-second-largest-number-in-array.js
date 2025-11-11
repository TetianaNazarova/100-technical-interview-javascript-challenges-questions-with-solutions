//Find the second largest number in an array
const findSecondLargestNumberInArray = (arr) => {
    let max = -Infinity;
    let second = -Infinity;

    for (let item of arr) {
        if (item > max) {
            second = max;
            max = item;
        } else if (item > second && item < max) {
            second = item;
        }
    }

    return second;
}

console.log(findSecondLargestNumberInArray([1, 2, 14, 15, 20, -3, 3]));