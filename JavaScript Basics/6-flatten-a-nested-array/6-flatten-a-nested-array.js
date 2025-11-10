//Flatten a nested array [1, [2, [3]]] → [1,2,3] - using Generator
function* flattenNestedArray (arr) {
    for (let item of arr) {
        if (Array.isArray(item)) {
            yield* flattenNestedArray(item);
        } else {
            yield item;
        }
    }
}

console.log([...flattenNestedArray([1, [2, [3]]])])