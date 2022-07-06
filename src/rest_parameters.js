// rest operator
/*
function sum(...numbers) {
    return numbers.reduce(function(prev,current) {
        return prev + current;
    })
}
*/

function sum(...numbers) {
    return numbers.reduce((prev,current) => prev + current)
}

function sum2(x,y) {
    return x + y
}


let nums = [1,2,3]
console.log(sum(1,2,3))
//spread operator
console.log(sum2(...nums))
