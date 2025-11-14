//Implement your own version of Array.prototype.map()

const myMap = (arr, func) => {
    const copy = [...arr];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(func(copy[i], i, arr))
    }

    return result;
}

console.log(myMap([1, 2, 3], (x) => x * 2))