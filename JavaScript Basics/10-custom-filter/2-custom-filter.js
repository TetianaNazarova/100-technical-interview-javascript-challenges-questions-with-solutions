// Implement Array.prototype.filter() manually
Array.prototype.myFilter = function (func, thisArgs) {
    if (typeof func !== 'function') {
        throw new TypeError(`${func} must be a function`);
    }

    return this.reduce((acc, curr, idx, array) => {
        if (func.call(thisArgs, curr, idx, array)) {
           acc.push(curr);
        }
        return acc;
    }, []);
}

const arr = [11, 'true', false, 1, 2, 3, 'some', 'word'];
console.log(arr.myFilter((y) => typeof y === 'number'))