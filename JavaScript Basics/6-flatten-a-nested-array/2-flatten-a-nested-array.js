//Flatten a nested array [1, [2, [3]]] → [1,2,3] - simple recursion
const flattenNestedArray = (arr) => {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenNestedArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flattenNestedArray([1, [2, [3]]]))