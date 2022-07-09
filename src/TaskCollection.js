export default class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks)
    }
}

// AMD
// commonjs
// umd
// es2015
//
