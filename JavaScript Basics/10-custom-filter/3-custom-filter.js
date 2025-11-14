// Implement Array.prototype.filter() manually - recursion
const myFilter = (arr, func, i = 0, result = []) => {

    if (i >= arr.length) return result;

    if (func(arr[i], i, arr)) {
        result.push(arr[i]);
    }

    return myFilter(arr, func, i + 1, result);
}


console.log(myFilter([11, 'true', false, 1, 2, 3, 'some', 'word'], (y) => typeof y === 'number'));