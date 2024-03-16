//======================================================================
// 34. Find First and Last Position of Element in Sorted Array
//======================================================================

var searchRange = function (nums, target) {
  let ans = [-1, -1];
  let findStartIndex = true;
  ans[0] = find(nums, target, findStartIndex);
  ans[1] = find(nums, target, (findStartIndex = false));
  return ans;
};

var find = function (nums, target, findStartIndex) {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      ans = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
};
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

console.log(searchRange(nums, target));
