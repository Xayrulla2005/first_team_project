"use strict"

const { keyboard } = require("telegraf/markup")

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
// function son(a,b,c){
//     let arr=[...a,...b].sort()
//     let rev= arr.reverse()
//     let soz=[]
//     for (const element of arr) {
//         soz.push(c)
//     }
//     return `sort: ${arr}, revers: ${rev}, soz: [${soz}]`
// }
// console.log(son([1,10],[2,3,4,5],'nodejs'));


// 4-misol 
// function son(num){
//    let a =0
//     if (num/2==0) {
//         return [num/2, num/2]
//     }
//     return [Math.floor(num/2), Math.ceil(num/2)]
// }
// console.log(son(-9));


// 5-misol 
// function soz(arr){
//    return arr.sort((a,b) => a.length -b.length)
// }
// console.log(soz(['a','ccc','dddd','bb']));



// 6-misol 
// function son(num){
//    return  num.map((a)=>a*2).sort((a,b)=> a-b)   
// }
// console.log(son([9,7,5,3,1]));


// 7-misol 
// function son(num){
//     return num.map((a)=> a%2==0?a*=a: a*2)
// }
// console.log(son([1,2,3,4,5,6]));


// 8-misol 
// function son(num){
//     return num.map((a)=> a.reverse()).reverse()
// }
// console.log(son([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]));


// 9-misol 
// function son(a,b){
//     let obj={
//         O:'ZERO',
//         1:'ONE',
//         2:'TWO',
//         3:'THREE',
//         4:'FOUR',
//         5:'FIVE',
//         6:'SIX',
//         7:'SEVEN',
//         8:'EIGHT',
//         9:'NINE'
//     }
//     let arr=[]
//     for(let i=a; i<=b;i++){
//         if (obj[i]!==undefined) {
//             arr.push(obj[i])

//         }
//     }
//     return `result: ${arr}, reverse: ${arr.reverse()}`
// }
// console.log(son(1,5));


// 10-misol 
// function son(num) {
//     let a = []
//     let b = []
//     let result = []
//     for (let i = 1; i <= num; i++) {
//         a.push(i)
//     }
    
//     for (const element of a) {
//         if (b.length !== 3) {
//             b.push(element)
//         } else {
//             result.push(b)
//             b=[]
//             b.push(element)
//         }
//     }
//     if (b.length) {
//         result.push(b)
//     }
//         return result
//     }
//  console.log(son(10));
