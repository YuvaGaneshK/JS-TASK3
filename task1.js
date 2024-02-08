const duplicateArray = [1,1,2,2,3,3,4,5,5];
const removedDuplicates = duplicateArray.filter((value, index,array)=>array.indexOf(value)===index);
console.log(removedDuplicates);
