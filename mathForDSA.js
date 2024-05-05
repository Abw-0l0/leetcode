//======================================================================
// prime numbers
//======================================================================

// var isPrime = function(n) {
//     if(n<=1){
//         return false;
//     }
//     let c=2
//     while(c*c<=n){
//         if(n%c==0){
//             return false
//         }
//         c++
//     }
//     return true
// };

// let n = 20
// for(let i=0;i<n;i++){
//     console.log(i+1," ",isPrime(i+1))
// }
// console.log(isPrime(n))

//======================================================================
// prime number in range n
//======================================================================

// var isPrime = function(n,prime) {
//     for(let i=2;i*i<=n;i++){
//         if(!prime[i]){
//             for(let j=i*2;j<=n;j+=i){
//                 prime[j]=true
//             }
//         }
//     }
//     for(let i=2;i<=n;i++){
//         if(!prime[i]){
//             console.log(i," ")
//         }
//     }
// };

// let n = 40;
// let prime = new Array(n+1).fill(false);

// isPrime(n, prime)

//======================================================================
// for square root
//======================================================================

var squareRoot = function(n,p) {
    let s=0;
    let e=n;
    let root=0.0;
    let dem=0
    let demcheck = true
    while(s<=e){
        let m = Math.floor(s+(e-s)/2);
        dem = m
        if(m*m==n){
            return m
        }
        if(m*m>n){
            e=m-1
            demcheck=true
        } else {
            s=m+1
            demcheck=false
        }
    }
    if(demcheck){
        root=dem-1
    } else {
        root=dem+1
    }
    let incr = 0.1;
    for(let i=0;i<p;i++){
        while(root*root<=n){
            root+=incr
        }
        root-=incr;
        incr/=10;
    }
    return root;
};

let n = 36;
let p = 3;

console.log(squareRoot(n, p).toFixed(p))
