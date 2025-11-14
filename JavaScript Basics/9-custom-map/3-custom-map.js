//Implement your own version of Array.prototype.map()
const myMap = (arr, func) => {
    return [...arr].reduce((acc, curr) => [...acc, func(curr)], [])
}

console.log(myMap([1, 2, 3], (x) => x * 2))