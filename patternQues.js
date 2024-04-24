// const patterntriangle  = function(){
//     for(let i=1;i<5;i++){
//         for(let j=1;j<=i;j++){
//             process.stdout.write("*")
//         }
//         console.log("\n")
//     }
// }

// patterntriangle()

// const patterntriangle  = function(n){
//     for(let i=1;i<2*n;i++){
//         const col = i>n?2*n-i:i
//         const noSpaces=n-col
//         for(let k=0;k<noSpaces;k++){
//             process.stdout.write(" ")
//         }
//         for(let j=1;j<=col;j++){
//             process.stdout.write("* ")
//         }
//         console.log("\n")
//     }
// }

// patterntriangle(4)

const patterntriangle  = function(n){
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n;j++){
            let k = n-Math.min(Math.min(i,j),Math.min(n-i,n-j))
            // let k = Math.min(2,3)
            process.stdout.write(String(k))
        }
        console.log("\n")
    }
}

patterntriangle(4)