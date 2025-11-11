//Find the second largest number in an array
const findSecondLargestNumberInArray = (arr) => {
    return [...new Set(arr)].sort((a, b) => b - a)[1];
}

console.log(findSecondLargestNumberInArray([1, 2, 14, 15, 20, -3, 3]));