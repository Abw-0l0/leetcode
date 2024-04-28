//======================================================================
// Recurrsion problem
//======================================================================

const fibonaci = function(n){
    if(n<2){
        return n;
    }
    return fibonaci(n-1)+fibonaci(n-2);
}

console.log(fibonaci(5))

//======================================================================
// Recurrsion problem
//======================================================================

// const factorial = function(n){
//     if(n<2){
//         return n;
//     }
//     return factorial(n-1)*n;
// }

// console.log(factorial(10))

//======================================================================
// Recurrsion problems
//======================================================================

// const binarySearch = function(arr,target,start,end){
//     if(start>end){
//         return -1;
//     }
//     let mid = Math.floor(start + (end-start)/2)
//     if(arr[mid]==target){
//         return mid
//     }
//     if(target<arr[mid]){
//         return binarySearch(arr,target,start,mid-1)
//     }
//     return binarySearch(arr,target,mid+1,end);
// }
// const arr = [1,2,3,4,5,6,7,8,9]
// const target = 3
// let start = 0
// let end = arr.length-1
// console.log(binarySearch(arr,target,start,end))
