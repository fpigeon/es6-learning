export class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks
    }
    dump() {
        console.log(this.tasks)
    }
}

// we can export many other things too like
export let foo = 'bar'
