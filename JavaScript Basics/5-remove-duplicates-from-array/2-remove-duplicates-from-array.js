// Remove duplicates from an array
const removeDuplicates = (arr) => {
   const resultArray = [];

   for (const item of arr) {
       if (!resultArray.includes(item)) {
           resultArray.push(item);
       }
   }

   return resultArray;
}

console.log(removeDuplicates([1, 2, 3, 1, 1, 4, 5, 3, 2]));