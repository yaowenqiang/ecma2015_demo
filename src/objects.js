function getPesion() {
    let name = 'jack';
    let age = 25;
    /*
    return {
        name: name,
        age: age
    }
    */
    return {name, age, greeting() {
        return `Hello, ${name}`
    }}
}

console.log(getPesion().name)
console.log(getPesion().greeting())



let person = {
    name: 'jack',
    age: 12,
    results: "result",
    count: 100
}

function getData({results, count}) {
    console.log(results, count)
}


// object destructure
let {name, age} = person




console.log(name)
console.log(age)


getData(person)
