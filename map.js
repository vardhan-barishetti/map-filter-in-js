const input = [1,2,3,4,5]

function transform(i){
    return i*2;
}

const ans = input.map(transform);

//const ans = input.map(x => x*2);


// const ans = input.map(function (i){
//     return i*2;
// });

console.log(ans);