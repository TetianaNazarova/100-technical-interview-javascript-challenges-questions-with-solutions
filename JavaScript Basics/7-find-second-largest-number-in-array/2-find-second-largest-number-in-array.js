//Find the second largest number in an array
const findSecondLargestNumberInArray = (arr) => {
    const firstLargestNumber = Math.max(...new Set(arr));
    const filteredArray = arr.filter((element) => element !== firstLargestNumber);
    return Math.max(...filteredArray);
}

console.log(findSecondLargestNumberInArray([1, 2, 14, 15, 20, -3, 3]))