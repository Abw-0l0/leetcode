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

var isPrime = function(n,prime) {
    for(let i=2;i*i<=n;i++){
        if(!prime[i]){
            for(let j=i*2;j<=n;j+=i){
                prime[j]=true
            }
        }
    }
    for(let i=2;i<=n;i++){
        if(!prime[i]){
            console.log(i," ")
        }
    }
};

let n = 40;
let prime = new Array(n+1).fill(false);

isPrime(n, prime)
