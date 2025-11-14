//Implement your own version of Array.prototype.map()
const myMap = (arr, func) => {
    const result = [];

    for (let item of arr) {
        result.push(func(item))
    }

    return result;
}

console.log(myMap([1, 2, 3], (x) => x * 2))