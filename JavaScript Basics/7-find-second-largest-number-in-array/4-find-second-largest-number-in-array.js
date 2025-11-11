//Find the second largest number in an array
const findSecondLargestNumberInArray = (arr) => {
    return arr.reduce((acc, num) => {
        const [max, second] = acc;

        if (num > max) {
           return [num, max];
        } else if (num < max && num > second) {
            return [max, num]
        }

        return acc;
    }, [-Infinity, -Infinity])[1];
}

console.log(findSecondLargestNumberInArray([1, 2, 14, 15, 20, -3, 3]))