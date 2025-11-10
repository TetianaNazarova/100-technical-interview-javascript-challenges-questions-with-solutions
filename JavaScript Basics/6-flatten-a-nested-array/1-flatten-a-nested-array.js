//Flatten a nested array [1, [2, [3]]] → [1,2,3]
const flattenNestedArray = (arr) => arr.flat(Infinity);

console.log(flattenNestedArray([1, [2, [3]]]))