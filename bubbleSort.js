//======================================================================
// https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ
// video 17,18,19/69
//======================================================================

//======================================================================
// bubble sort/sinking sort/exchange sort
//======================================================================

// const bubbleSort = function (arr) {
//   let swap = false;
//   for (let i = 0; i < arr.length; i++) {
//     swap=false
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[j] < arr[j - 1]) {
//         swap = true;
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//     if(!swap){
//         break;
//     }
//   }
//   return 0;
// };

// // const arr = [5,4,3,2,1]
// const arr = [1,2,3,4,7,6,5]
// bubbleSort(arr)
// console.log(arr)

//======================================================================
// selection sort
//======================================================================

// const selectionSort = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let last = arr.length - i - 1;
//     let maxIndex = getMaxIndex(arr, 0, last);
//     swap(arr, maxIndex, last);
//   }
// };

// const swap = function (arr, first, second) {
//   let temp = arr[first];
//   arr[first] = arr[second];
//   arr[second] = temp;
// };

// const getMaxIndex = function (arr, start, end) {
//   let max = start;
//   for (let i = start; i <= end; i++) {
//     if (arr[max] < arr[i]) {
//       max = i;
//     }
//   }
//   return max;
// };

// // const arr = [5, 4, 3, 2, 1];
// const arr = [];
// selectionSort(arr);
// console.log(arr);

//======================================================================
// insertion sort
//======================================================================

const insertionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
};

const swap = function (arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

const arr = [5,3,4,1,2];
// const arr = [];
insertionSort(arr);
console.log(arr);
