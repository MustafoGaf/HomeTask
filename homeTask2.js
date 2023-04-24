// task 1
function calculator(str){
    return eval(str)
}

console.log(calculator("23+4*2"));

// console.log(calculator("23+4"));

// // task 2

// function strInNum(str){
//     return Number(str)
// }

// console.log(strInNum("22"));

// // task 3
// function comp(str1, str2){
//     return str1.length === str2.length 
// }

// console.log(comp("aq", "awd"));

// // task 4


// function repeatString(txt, n){
//     if(typeof txt == 'string'){
//         return txt.repeat(n)
//     }else {
//         return "Not a String"
//     }
// }

// console.log(repeatString(123, 3));

// // task 5
// function CapitalLeters(str){
//     let sum = 0;
//     let cap = str.toUpperCase()
//     for(let i =0; i< str.length; i++){
//         if(str[i] === cap[i]){
//             sum++;
//         }
//     }
//     return sum
// }

// console.log(CapitalLeters("asasasasASDdslkgjkHjkndkjgnsdjkKLHLKJKLJ"));

// // task 6
// function makeTitle(str){
//     let a = str.split(" ");
//     let newStr = '';
//     for(let i =0; i<a.length; i++){
//        let firs = a[i].charAt(0).toUpperCase()
//     //    newStr+= firs.concat(a[i].slice(1), " ");
//        newStr = newStr.concat(firs, a[i].slice(1), " ")

//     }
//     return newStr;

// }

// console.log(makeTitle("iojsidjfh akjkfljd Akjlkfsjkljf"));