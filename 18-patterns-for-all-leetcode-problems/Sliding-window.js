//======================================================================
// leetcode : 76. Minimum Window Substring
//======================================================================

// function slidingWindow(s, t) {
//     if (t.length > s.length) return "";
    
//     let map = new Map();
//     for (let c of t) {
//         map.set(c, (map.get(c) || 0) + 1);
//     }
    
//     let counter = map.size;
    
//     let begin = 0, end = 0;
//     let head = 0;
//     let len = Number.MAX_VALUE;
    
//     while (end < s.length) {
//         let c = s[end];
        
//         if (map.has(c)) {
//             map.set(c, map.get(c) - 1);
//             if (map.get(c) === 0) counter--;
//         }
//         end++;
        
//         while (counter === 0) {
//             let tempc = s[begin];
            
//             if (map.has(tempc)) {
//                 map.set(tempc, map.get(tempc) + 1);
//                 if (map.get(tempc) > 0) counter++;
//             }
            
//             if (end - begin < len) {
//                 len = end - begin;
//                 head = begin;
//             }
            
//             begin++;
//         }
//     }
    
//     if (len === Number.MAX_VALUE) return "";
    
//     return s.substring(head, head + len);
// }

// let s = "ABECCCCAABBBBAC"
// let t = "ABC"

// console.log(slidingWindow(s,t))

//======================================================================
// leetcode : 3. Longest Substring Without Repeating Characters
//======================================================================


function lengthOfLongestSubstring(s) {
    let map = new Map();
    let begin = 0, end = 0, counter = 0, d = 0;

    while (end < s.length) {
        let c = s[end];
        map.set(c, (map.get(c) || 0) + 1);
        if (map.get(c) > 1) counter++;
        end++;

        while (counter > 0) {
            let charTemp = s[begin];
            if (map.get(charTemp) > 1) counter--;
            map.set(charTemp, map.get(charTemp) - 1);
            begin++;
        }

        d = Math.max(d, end - begin);
    }

    return d;
}

// Example usage:
let s = "abcabcdebb";
console.log(lengthOfLongestSubstring(s));
