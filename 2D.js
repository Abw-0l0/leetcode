//======================================================================
// https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ
// video 16/69
//======================================================================

//======================================================================
// 2D array search
//======================================================================

// var search = function (metrix, target) {
//   start = 0;
//   end = metrix.length - 1;
//   while (start < metrix.length && end >= 0) {
//     if (metrix[start][end] == target) {
//         return [start, end];
//     }
//     if(metrix[start][end]<target){
//         start++
//     } else {
//         end--
//     }
//   }
//   return [-1, -1];
// };

// const metrix = [
//   [10, 20, 30, 40],
//   [12, 22, 32, 45],
//   [28, 29, 37, 49],
//   [33, 34, 38, 50],
// ];

// const target = 29;

// console.log(search(metrix, target));

//======================================================================
// 2D ascending array search
//======================================================================

var binarySearch = function (metrix, target, row, cStart, cEnd) {
  while (cStart <= cEnd) {
    let mid = cStart + (cEnd - cStart) / 2;
    if (metrix[row][mid] == target) {
      return [row,mid];
    }
    if (metrix[row][mid] < target) {
      cStart = mid + 1;
    } else {
      cEnd = mid - 1;
    }
  }
  return [-1, -1];
};

var search = function (metrix, target) {
  let rows = metrix.length;
  let columns = metrix[0].length;
  if (rows == 1) {
    return binarySearch(metrix, target, 0, 0, columns - 1);
  }
  let rStart = 0;
  let rEnd = rows - 1;
  let cMid = Math.floor(columns / 2);
  while (rStart < rEnd - 1) {
    let mid = Math.floor(rStart + (rEnd - rStart) / 2);
    if (metrix[mid][cMid] == target) {
      return [mid,cMid];
    }
    if (metrix[mid][cMid] < target) {
      rStart = mid;
    } else {
      rEnd = mid;
    }
  }

  if (target <= metrix[rStart][cMid - 1]) {
    return binarySearch(metrix, target, rStart, 0, cMid - 1);
  }
  if (
    target >= metrix[rStart][cMid + 1] &&
    target <= metrix[rStart][columns - 1]
  ) {
    return binarySearch(metrix, target, rStart, cMid + 1, columns - 1);
  }
  if (target <= metrix[rStart + 1][cMid - 1]) {
    return binarySearch(metrix, target, rStart + 1, 0, cMid - 1);
  } else {
    return binarySearch(metrix, target, rStart + 1, cMid + 1, columns - 1);
  }
};

const metrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 9, 10, 11],
  [12, 13, 14, 15],
];

const target = 7;

console.log(search(metrix, target));
