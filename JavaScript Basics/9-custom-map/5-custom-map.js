//Implement your own version of Array.prototype.map()
Array.prototype.myMap = function(func, thisArg) {
    return this.reduce((acc, curr, idx, arr) => {
        if (idx in this) {
            acc.push(func.call(thisArg, curr, idx, arr));
        }
        return acc;
    }, [])
}

const arr = [1, 2, 3];

console.log(arr.myMap((x) => x * 2))