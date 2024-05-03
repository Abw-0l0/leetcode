//======================================================================
// no of n's in binary
//======================================================================

var isPrime = function(n) {
    if(n<=1){
        return false;
    }
    let c=2
    while(c*c<=n){
        if(n%c==0){
            return false
        }
        c++
    }
    return true
};

let n = 20
for(let i=0;i<n;i++){
    console.log(i+1," ",isPrime(i+1))
}
console.log(isPrime(n))
