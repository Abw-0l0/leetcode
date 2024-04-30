//======================================================================
// bitwise
//======================================================================

// const oddOrEven = function(n){
//     return (n&1)==1;
// }
// const n = 3
// console.log(oddOrEven(n))

//======================================================================
// unique
//======================================================================

// const unique = function(arr){
//     let unique=0
//     for(let n=0;n<arr.length;n++){
//         if(arr[n]<0){
//             unique ^= -(arr[n])
//         } else {
//             unique ^= arr[n]
//         }
//     }
//     return unique;
// }
// const arr = [2,3,6,4,-3,6,-4]
// console.log(unique(arr))

//======================================================================
// base of number
//======================================================================

const a = 10
const b = 2

const ans = Math.floor(Math.log(a)/Math.log(b)+1)
console.log(ans)
