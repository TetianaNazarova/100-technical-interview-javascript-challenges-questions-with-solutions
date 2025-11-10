//Flatten a nested array [1, [2, [3]]] → [1,2,3] - using some method
const flattenNestedArray = (arr) => {
    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr)
    }
    return arr;
};

console.log(flattenNestedArray([1, [2, [3]]]))