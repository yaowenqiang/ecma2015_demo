// const  means the variables can not be assigned to other values ,but the variable value can be changed
const name = ['jack','rose']
// force immutability with  const months = Object.freeze([...])
name.push('john')
function fire(bool) {
    if(bool) {
        //var foo = 'bar';
        //let is a scoped definition
        let foo = 'bar';
        console.log(foo);
    } else {
        console.log(foo) //hositing
        //https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting
    }
}

fire()
