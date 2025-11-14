//Implement your own version of Array.prototype.map()
Array.prototype.myMap = function(func, thisArg) {
    if (typeof func !== 'function') {
        throw new TypeError(`${func} is not a function`);
    }
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result.push(func.call(thisArg, this[i], i, this));
        }
    }
    return result;
}

const arr = [1, 2, 3];

console.log(arr.myMap((x) => x * 2));
// console.log(arr.myMap());