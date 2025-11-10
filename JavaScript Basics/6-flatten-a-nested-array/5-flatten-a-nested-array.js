//Flatten a nested array [1, [2, [3]]] → [1,2,3] - using reduce method recursively
const flattenNestedArray = (arr) => {
    return arr.reduce((acc, item) => Array.isArray(item) ? [...acc, ...flattenNestedArray(item)] :
        [...acc, item], []);
};

console.log(flattenNestedArray([1, [2, [3]]]))