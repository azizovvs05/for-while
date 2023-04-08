let reqem = "345"

let i = 0;

let vurma = 1;
while( i < reqem.length){
    console.log(reqem[i]);

    vurma *= Number(reqem[i]);
    i++;
}

console.log(vurma);

