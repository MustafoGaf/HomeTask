// TASK 1
let circuite = (a, b) => a * b;
console.log(circuite(230, 10)); //->2300

// TASK 2
let devisibeByfive = (a) => (a % 5 == 0 ? true : false);

console.log(devisibeByfive(-51)); //-> FALSE

// TASK 3
let isSameNum = (num1, num2) => (num1 === num2 ? true : false);
console.log(isSameNum(4, 2)); // -> FALSE

// TASK 4
let LongesTime = (h, m, s) => {
  if (h * 3600 > m * 60 && h * 3600 > s) {
    return h;
  } else if (h * 3600 < m * 60 && s < m * 60) {
    return m;
  } else {
    return s;
  }
};

console.log(LongesTime(2, 300, 15000)); // -> 300

// TASK 5

let oneOdd = (a) => {
  let last = Math.floor(a / 10);
  let second = a % 10;
  if (
    (last % 2 == 0 && second % 2 !== 0) ||
    (last % 2 != 0 && second % 2 == 0)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(oneOdd(12)); //->TRUE

// TASK 6
let negativNum = (a) => -a;
console.log(negativNum(20)); //-> -20
