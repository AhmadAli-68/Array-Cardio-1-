const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);


const nums = [1, 2, 3, 4];
const sum = nums.reduce((total, num) => total + num, 0); // 10
console.log(sum);

// find() and some():
const num2 = [1, 2, 3, 4, 5, 6]
const firstEven = num2.some(num => num % 2 === 0);
console.log(firstEven);

// findIndex()
const num3 = [1, 2, 3, 4, 5];
const index = num3.findIndex(num => num > 3)
console.log(index);

// concat():
const arr1 = [1, 2]
const arr2 = [3, 4, 5]
const combined = arr1.concat(arr2);
console.log(combined);

// slice():
const num4 = [1, 2, 3, 4, 5];
const sliced = num4.slice(0, 4);
console.log(sliced);

// splice():
const num5 = [1, 2, 3, 4, 5];
const spliced = num5.splice(1, 2)
console.log(spliced);

// includes():
const num6 = [1, 2, 3]
const hasTwo = num6.includes(4);
console.log(hasTwo);
