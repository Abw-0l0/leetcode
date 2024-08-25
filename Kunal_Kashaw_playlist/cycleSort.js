//======================================================================
// https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ
// video 20/69
//======================================================================

//======================================================================
// leet code : 
//======================================================================

// const cycleSort = function (arr) {
//   let i=0;
//   while(i<arr.length) {
//     let correct = arr[i]
//     if(arr[i]<arr.length && arr[i]!=arr[correct]){
//       swap(arr,i,correct)
//     } else {
//       i++
//     }
//   }
//   for(let j=0;j<arr.length;j++){
//     if(arr[j]!=j){
//       return j
//     }
//   }
//   return arr.length
// };

// const swap = function (arr,i,correct) {
//   let temp = arr[i]
//   arr[i]=arr[correct]
//   arr[correct]=temp
// };

// const arr = [5,4,2,1,0]
// const ans = cycleSort(arr)
// console.log(arr,ans)

//======================================================================
// leet code : 448
//======================================================================

// const cycleSort = function (arr) {
//   let i=0;
//   while(i<arr.length) {
//     let correct = arr[i]-1
//     if(arr[i]<=arr.length && arr[i]!=arr[correct]){
//       swap(arr,i,correct)
//     } else {
//       i++
//     }
//   }
//   let ans=[]
//   for(let j=1;j<=arr.length;j++){
//     if(arr[j-1]!=j){
//       ans.push(j)
//     }
//   }
//   return ans
// };

// const swap = function (arr,i,correct) {
//   let temp = arr[i]
//   arr[i]=arr[correct]
//   arr[correct]=temp
// };

// const arr = [4,3,2,7,8,2,3,1]
// const ans = cycleSort(arr)
// console.log(arr,ans)

//======================================================================
// leet code : 287
//======================================================================

// const cycleSort = function (arr) {
//   let i=0;
//   while(i<arr.length) {
//     let correct = arr[i]-1
//     if(arr[i]<=arr.length && arr[i]!=arr[correct]){
//       swap(arr,i,correct)
//     } else {
//       i++
//     }
//   }
//   let ans=[]
//   for(let j=1;j<=arr.length;j++){
//     if(arr[j-1]!=j){
//       return arr[j-1]
//     }
//   }
//   return ans
// };

// const swap = function (arr,i,correct) {
//   let temp = arr[i]
//   arr[i]=arr[correct]
//   arr[correct]=temp
// };

// const arr = [1,3,4,2,2]
// const ans = cycleSort(arr)
// console.log(arr,ans)

//======================================================================
// leet code : 442
//======================================================================

// const cycleSort = function (arr) {
//   let i=0;
//   while(i<arr.length) {
//     let correct = arr[i]-1
//     if(arr[i]<=arr.length && arr[i]!=arr[correct]){
//       swap(arr,i,correct)
//     } else {
//       i++
//     }
//   }
//   let ans=[]
//   for(let j=0;j<arr.length;j++){
//     if(arr[j]!=j+1){
//       ans.push(arr[j])
//     }
//   }
//   return ans
// };

// const swap = function (arr,i,correct) {
//   let temp = arr[i]
//   arr[i]=arr[correct]
//   arr[correct]=temp
// };

// const arr = [4,3,2,7,8,2,3,1]
// const ans = cycleSort(arr)
// console.log(arr,ans)

//======================================================================
// leet code : 645
//======================================================================

// const cycleSort = function (arr) {
//   let i=0;
//   while(i<arr.length) {
//     let correct = arr[i]-1
//     if(arr[i]<=arr.length && arr[i]!=arr[correct]){
//       swap(arr,i,correct)
//     } else {
//       i++
//     }
//   }
//   let ans=[]
//   for(let j=0;j<arr.length;j++){
//     if(arr[j]!=j+1){
//       ans.push(arr[j])
//       ans.push(j+1)
//     }
//   }
//   return ans
// };

// const swap = function (arr,i,correct) {
//   let temp = arr[i]
//   arr[i]=arr[correct]
//   arr[correct]=temp
// };

// const arr = [1,2,2,4]
// const ans = cycleSort(arr)
// console.log(arr,ans)

//======================================================================
// leet code : 41
//======================================================================

const cycleSort = function (arr) {
  let i=0;
  while(i<arr.length) {
    let correct = arr[i]-1
    if(arr[i]>0 && arr[i] <= arr.length && arr[i]!=arr[correct]){
      swap(arr,i,correct)
    } else {
      i++
    }
  }
  for(let j=0;j<arr.length;j++){
    if (arr[j]!=j+1){
      return j+1
    }
  }
  return arr.length+1
};

const swap = function (arr,i,correct) {
  let temp = arr[i]
  arr[i]=arr[correct]
  arr[correct]=temp
};

const arr = [3,4,-1,1]
const ans = cycleSort(arr)
console.log(arr,ans)