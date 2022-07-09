function *numbers() {
    console.log('begin');
    yield 1;
    yield 2;
    yield 3;
}


let iterator = numbers();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next().value);

function *range(start, end) {
    while (start < end) {
        yield start;
        start ++;
    }
}

for (let i of iterator) {
    console.log(i)
}


console.log(
[...range(1,2)]
)
