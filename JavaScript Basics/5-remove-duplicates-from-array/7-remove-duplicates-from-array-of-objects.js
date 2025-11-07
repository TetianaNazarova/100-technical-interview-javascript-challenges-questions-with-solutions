// Remove duplicates from an array
const removeDuplicates = (arr) => {
    const map = new Map();
    const result = [];

    for (const item of arr) {
        if (!map.has(item.id)) {
            result.push(item);
            map.set(item.id, item.name)
        }
    }

    return result;
}

console.log(removeDuplicates([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
]));


