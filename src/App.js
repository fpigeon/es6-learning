// Let and Const
function fire(bool) {
    let foo = 'bar'
    if (bool) {
        console.log(foo)
    } else {
        console.log(foo)
    }
}

fire(false)

// Arrows
class TaskCollection {
    constructor( tasks = [] ) {
        this.tasks = tasks;
    }
    prepare() {
        this.tasks.forEach(task => {
            console.log(this)
        })
    }
}

class Task{
    toGulp() {
        console.log('converting to gulp')
    }
}

new TaskCollection([
    new Task, new Task, new Task
]).prepare()

// return not needed example
let names = ["Jeffrey", "Taylor", "Frank"]

// old way 
names = names.map(function(name){ 
    return name + ' is cool.'
})

console.log(names)

// new
names = names.map((name) => name + ' is cool.')

console.log(names)