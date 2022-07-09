[1,2,3,4].indexof(2)
[1,2,3,4].contains(2)
[1,2,3,4].includes(2)
[1,2,3,4].find(function(item) {return item === 1})
[1,2,3,4].find((item) => item === 1)
[1,2,3,4].find(item => item === 1)

class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User('jack', false),
    new User('rose', false),
    new User('john', true),
]

users.find(user => user.isAdmin).name
