const arr = [1,2,3,4,5,6];

function filterLogic(n){
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const ans = arr.filter(filterLogic);


// const ans = arr.filter(function (n){
//     if(n%2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });


console.log(ans);