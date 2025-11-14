// Implement Array.prototype.filter() manually
Array.prototype.myFilter = function (func, thisArg) {
    if (typeof func !== 'function') {
        throw new TypeError(`${func} must be a function`);
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (func.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

const arr = [11, 'true', false, 1, 2, 3, 'some', 'word'];
console.log(arr.myFilter((y) => typeof y === 'number'))