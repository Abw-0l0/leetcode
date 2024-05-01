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
// digits in number
//======================================================================

// const a = 10
// const b = 2

// const ans = Math.floor(Math.log(a)/Math.log(b)+1)
// console.log(ans)

//======================================================================
// power of two
//======================================================================

// const n = 14
// ans = (n & (n-1)) == 0 //Fix for 0

// console.log(ans)

//======================================================================
// power
//======================================================================

// let power = 6
// let base = 3

// let ans = 1

// while(power>0){
//     if((power&1)==1){
//         ans*=base
//     }
//     base *= base
//     power = power>>1
// }

// console.log(ans)

//======================================================================
// no of n's in binary
//======================================================================

// const setBits = function(n){
//     let count=0
//     while(n>0){
//         count++
//         n=n&(n-1)
//     }
//     return count
// }

// let n = 101
// console.log(n.toString(2))
// console.log(setBits(n))

//======================================================================
// no of n's in binary
//======================================================================

var flipAndInvertImage = function(image) {
    for(let j=0;j<image.length;j++){
        for(let i=0;i<Math.floor((image[0].length+1)/2);i++){
            let temp = image[j][i]^1
            image[j][i] = image[j][image[j].length-i-1]^1
            image[j][image[j].length-i-1] = temp
        }
    }
    return image
};

image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
console.log(flipAndInvertImage(image))
