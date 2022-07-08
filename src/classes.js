/*
function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.changeEmail = function(newemail) {
    this.email =  newemail
};


var user = new User('jack', 'jack@example.com');
user.changeEmail('newemail@example.com');
console.dir(user)
*/

class User {
    /*
    static register(username, email) {
        return new User(username, email)
    }
    */
    static register(...args) {
        return new User(...args)
    }
    constructor(username,email) {
        this.username = username;
        this.email = email;
    }

    changeEmail(newemail) {
        this.email = newemail;
    }

    get foo() {
        return 'foo';
    }
}

//let user = new User('newby', 'newby@email.com')
let user = User.register('newby', 'newby@email.com')
user.changeEmail('benew@examilcom')
console.dir(user)
console.dir(user.foo)

function log(strategy) {
    strategy.handle()
}

log(new class {
    handle() {
        console.log('using the console strategy to log.')
    }
})
