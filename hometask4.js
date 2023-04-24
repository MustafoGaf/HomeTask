// task 1
function name(...arr) {
  let newArr = [];
  arr.forEach((el) => {
    el.forEach((a) => {
      newArr.push(a);
    });
  });
  return newArr;
}
console.log(name([1, 2, 3], [4, 5, 6]));

// task 2
function second(arr) {
  let newArr = arr.sort((a, b) => a - b);
  return newArr[arr.length - 2];
}
console.log(second([7, 1, 2, 3, 4, 4, 5, 6, 8]));

// task 3
function compackt(arr) {
  return arr.filter((el) => !el == false);
}

console.log(compackt([1, "234", false, 0, NaN, null, undefined, "", 2456]));

// task 4
function arrMul(n, len) {
  let newArr = [];
  for (let i = 1; i <= len; i++) {
    newArr.push(n * i);
  }
  return newArr;
}
console.log(arrMul(12, 10));

// task 5
function marathon(arr) {
  let sum = arr.reduce((a, b) => Math.abs(a) + Math.abs(b));
  return 25 === sum;
}
console.log(marathon([1, 9, 5, 8, 2]));

// task 6
function miror(array) {
  let arr = array;
  let arr2 = [...arr];
  arr2.pop();
  return arr.concat(arr2.reverse());
}
console.log(miror([1, 2, 3, 4, 5]));

// task 7
function index(arr) {
  let sum = 0;
  arr.forEach((el, i) => (sum += el * i));
  return sum;
}

console.log(index([1, 2, 3, 4, 5]));

// task 8

function sort(arr, str) {
  let arr1 = [...arr]
  let sortArr = arr.sort((a, b) => {
    return a - b;
  });
  console.log("^^^^^", arr);
  if (str === "Abc") return sortArr;
  else if (str === "Des") return sortArr.reverse();
  else return arr1;
}
console.log(sort([3, 5, 1, 4, 9, 7, 1, 5, 4, 7, 2], "None"));

// task 9
function findNaN(arr) {
  let index = -1;
  arr.forEach((el, i) => {
    if (el.toString() === "NaN") {
      index = i;
    }
  });
  return index;
}
console.log(findNaN([3, 2, 3, 4]));

// task 10

function reverseArr(nums) {
  let arr = nums.toString().split("");
  let newArr = arr.map((el) => Number(el));
  newArr.reverse();
  return newArr;
}
console.log(reverseArr(123456));
