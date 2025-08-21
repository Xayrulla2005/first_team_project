"use strict"
// 1-misol 
// function son(num){
//     let arr=[]
//     for (let element=0;element<num.length;element++) {
//         if (num[element]<0) {
//             num[element] *= -1
//         }
//         if (num[element]%2==0) {
//             num[element]*=num[element]
//         }
//         arr.push(num[element])
//     }
//     let a=0
//     for (const element of arr) {
//         a+=element
//     }
//     return `result:[${arr}] sum:${a}`
// }
// console.log(son([0,8,9,-7,-6,5,6]));


// 2-misol 
// function son(a,b){
//  for (const element of a) {
//     for (const item of b) {
//         if (element==item) {
//             return false
//         }
//     }
//  }
//  return true
// }
// console.log(son([1,2,3],[5,6,4]));


// 3-misol 
