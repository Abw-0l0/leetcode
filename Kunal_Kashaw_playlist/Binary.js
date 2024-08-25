//======================================================================
// https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ
// video 15/69
//======================================================================

//======================================================================
// leetcode : 34. Find First and Last Position of Element in Sorted Array
//======================================================================

// var searchRange = function (nums, target) {
//   let ans = [-1, -1];
//   let findStartIndex = true;
//   ans[0] = find(nums, target, findStartIndex);
//   ans[1] = find(nums, target, (findStartIndex = false));
//   return ans;
// };

// var find = function (nums, target, findStartIndex) {
//   let ans = -1;
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (target < nums[mid]) {
//       end = mid - 1;
//     } else if (target > nums[mid]) {
//       start = mid + 1;
//     } else {
//       ans = mid;
//       if (findStartIndex) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//   }
//   return ans;
// };
// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

// console.log(searchRange(nums, target));

//======================================================================
// Infinit array
//======================================================================

// var find = function (nums, target, start, end) {
//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (target < nums[mid]) {
//       end = mid - 1;
//     } else if (target > nums[mid]) {
//       start = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1; // return -1 if target is not found
// };

// var ans = function (nums, target) {
//   let start = 0;
//   let end = 1;

//   while (target > nums[end]) {
//     let temp = end + 1;
//     end = end + (end - start + 1) * 2;
//     start = temp;
//   }
//   return find(nums, target, start, end);
// };

// const nums = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170];
// const target = 10;

// console.log(ans(nums, target));

//======================================================================
// leetcode : 852. Peak Index in a Mountain Array
//======================================================================

// var ans = function (arr) {
//   let start = 0;
//   let end = arr.length -1;

//   while (start < end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if(arr[mid] > arr[mid+1]){
//         end = mid;
//     } else {
//         start= mid+1
//     }
//   }
//   return start;
// };

// const arr = [1,2,3,4,5,6,7,5,4,3,2,1];

// console.log(ans(arr));

//======================================================================
// leetcode : 1095. Find in Mountain Array
//======================================================================

// var findPeak = function (arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (arr[mid] > arr[mid + 1]) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return start;
// };

// var orderAgnostic = function (arr, target, start, end) {
//   checker = arr[start] < arr[end];

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (target == arr[mid]) {
//       return mid;
//     }
//     if (checker) {
//       if (target < arr[mid]) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     } else {
//       if (target < arr[mid]) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     }
//   }
//   return -1;
// };

// var findInMountainArray = function (target, mountainArr) {
//   let start = 0;
//   let end = mountainArr.length - 1;
//   const peak = findPeak(mountainArr);
//   const firstTry = orderAgnostic(
//     mountainArr,
//     target,
//     (start = 0),
//     (end = peak)
//   );

//   if (firstTry != -1) {
//     return firstTry;
//   }
//   return orderAgnostic(
//     mountainArr,
//     target,
//     (start = peak + 1),
//     (end = mountainArr.length - 1)
//   );
// };

// const mountainArr = [1, 2, 3, 4, 5, 3, 1];
// const target = 3;

// console.log(findInMountainArray(target, mountainArr));

//======================================================================
// leetcode : 33. Search in Rotated Sorted Array
//======================================================================

// var findPivot = function (arr) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//         let mid = Math.floor(start + (end - start) / 2);
//         if (mid < end && arr[mid] > arr[mid + 1]) {
//           return mid;
//         }
//         if (mid > start && arr[mid] < arr[mid - 1]) {
//           return mid - 1;
//         }
//         if (arr[mid] <= arr[start]) {
//           end = mid - 1;
//         } else {
//           start = mid + 1;
//         }
//       }
//     return -1;
// };

//   var binarySearch = function (arr, target, start, end) {
//     while (start <= end) {
//       let mid = Math.floor(start + (end - start) / 2);
//       if (target < arr[mid]) {
//         end = mid - 1;
//       } else if (target > arr[mid]) {
//         start = mid + 1;
//       } else {
//         return mid;
//       }
//     }
//     return -1;
//   };

//   var search = function (arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let pivot = findPivot(arr);
//     if (pivot == -1) {
//       return binarySearch(arr, target, start, end);
//     }
//     if (arr[pivot] == target) {
//       return pivot;
//     }
//     if (target >= arr[0]) {
//       return binarySearch(arr, target, start, pivot - 1);
//     }
//     return binarySearch(arr, target, pivot + 1, end);
//   };

//   const arr = [4,5,6,7,0,1,2];
//   const target = 0;
//   console.log(search(arr, target));

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

//======================================================================
// leetcode : 4. Median of Two Sorted Arrays             Assignment
//======================================================================

// var findMedianSortedArrays = function (nums1, nums2) {
//   let merged = nums1.concat(nums2);
//   merged = merged.sort((a, b) => a - b);
//   console.log(merged);
//   console.log(Math.floor(merged.length / 2));
//   console.log((merged[2] + merged[2 - 1]) / 2);
//   if (merged.length % 2 == 0) {
//     let mid = Math.floor(merged.length / 2);
//     return (merged[mid] + merged[mid - 1]) / 2.0;
//   } else {
//     let mid = Math.floor(merged.length / 2);
//     return merged[mid];
//   }
// };

// const nums1 = [3];
// const nums2 = [-2, -1];
// console.log(findMedianSortedArrays(nums1, nums2));

//======================================================================
// leetcode : 154. Find Minimum in Rotated Sorted Array II           Assignment
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

// var findMin = function(nums) {
//     const pivot = findPivot(nums)
//     return nums[pivot+1];
// };

// const arr = [4,5,1,2,3];
// console.log(findMin(arr));

//======================================================================
// leetcode : 315. Count of Smaller Numbers After Self           Assignment
//======================================================================

var search = function (arr, target, start, end) {
  let counter = 0;
  for (let i = start; i <= end; i++) {
    if (arr[i] < target) {
      counter++;
    }
  }
  return counter;
};

var countSmaller = function (nums) {
  let end = nums.length - 1;
  let arr = [];
  for (i = 0; i <= end; i++) {
    let a = search(nums, nums[i], i, end);
    arr.push(a);
  }
  return arr;
};

const arr = [5, 2, 6, 1];

console.log(countSmaller(arr));
