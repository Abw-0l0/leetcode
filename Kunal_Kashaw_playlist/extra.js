//======================================================================
// leetcode : 81. Search in Rotated Sorted Array II (with duplicates)
//======================================================================

// var findPivot = function (arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (mid < end && arr[mid] > arr[mid + 1]) {
//       return mid;
//     }
//     if (mid > start && arr[mid] < arr[mid - 1]) {
//       return mid - 1;
//     }
//     if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
//       if (arr[start] > arr[start + 1]) {
//         return start;
//       }
//       start++;
//       if (arr[end] < arr[end - 1]) {
//         return end - 1;
//       }
//       end--;
//     } else if (
//       arr[start] < arr[mid] ||
//       (arr[start] == arr[mid] && arr[mid] > arr[end])
//     ) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1;
// };

// var binarySearch = function (arr, target, start, end) {
//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (target < arr[mid]) {
//       end = mid - 1;
//     } else if (target > arr[mid]) {
//       start = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// };

// var bsearch = function (arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let pivot = findPivot(arr);
//   if (pivot == -1) {
//     return binarySearch(arr, target, start, end);
//   }
//   if (arr[pivot] == target) {
//     return pivot;
//   }
//   if (target >= arr[0]) {
//     return binarySearch(arr, target, start, pivot - 1);
//   }
//   return binarySearch(arr, target, pivot + 1, end);
// };

// var search = function (arr, target) {
//     const result = bsearch(arr,target)
//     if(result==-1){
//         return false
//     } else {
//         return true
//     }
// };

// const arr = [1];
// const target = 0;
// console.log(search(arr, target));

//======================================================================
// leetcode : 410. Split Array Largest Sum
//======================================================================

// var splitArray = function (nums, target) {
//   let start = 0;
//   let end = 0;

//   for (let i = 0; i < nums.length; i++) {
//     start = Math.max(start, nums[i]);
//     end += nums[i];
//   }
//   while (start < end) {
//     let mid = Math.floor(start + (end - start) / 2);

//     let sum = 0;
//     let pieces = 1;
//     nums.forEach((num) => {
//       if (sum + num > mid) {
//         sum = num;
//         pieces++;
//       } else {
//         sum += num;
//       }
//     });
//     if(pieces>target){
//         start=mid+1;
//     } else {
//         end=mid
//     }
//   }
//   return end;
// };

// const nums = [7, 2, 5, 10, 8];
// const k = 2;
// console.log(splitArray(nums, k));
