function minWindow(s, t) {
    if (t.length > s.length) return "";
    
    // Create a map to store the frequency of characters in the target string
    let map = new Map();
    for (let c of t) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    
    let counter = map.size;
    
    let begin = 0, end = 0;
    let head = 0;
    let len = Number.MAX_VALUE;
    
    while (end < s.length) {
        let c = s[end];
        
        if (map.has(c)) {
            map.set(c, map.get(c) - 1);
            if (map.get(c) === 0) counter--;
        }
        end++;
        
        while (counter === 0) {
            let tempc = s[begin];
            
            if (map.has(tempc)) {
                map.set(tempc, map.get(tempc) + 1);
                if (map.get(tempc) > 0) counter++;
            }
            
            if (end - begin < len) {
                len = end - begin;
                head = begin;
            }
            
            begin++;
        }
    }
    
    if (len === Number.MAX_VALUE) return "";
    
    return s.substring(head, head + len);
}

let p = "abc"
let t = "cbaebabacd"

console.log(slidingWindow(t,p))