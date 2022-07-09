var TaskCollection = function TaskCollection(tasks) {
    if ( tasks === void 0 ) tasks = [];

    this.tasks = tasks;
};

TaskCollection.prototype.dump = function dump () {
    console.log(this.tasks);
};

// AMD
// commonjs
// umd
// es2015
//

//var TaskCollection = require("./TaskCollection")

new TaskCollection([
    '1',
    '2',
    '3'
]).dump();
