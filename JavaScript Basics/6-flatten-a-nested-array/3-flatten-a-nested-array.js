//Flatten a nested array [1, [2, [3]]] → [1,2,3] - iterative solution without recursion
const flattenNestedArray = (arr) => {
    let stack = [...arr];
    let result = [];

    while (stack.length) {
        const item = stack.pop();

        if (Array.isArray(item)) {
            stack.push(...item);
        } else {
            result.push(item);
        }
    }

    return result.reverse();
};

console.log(flattenNestedArray([1, [2, [3]]]))