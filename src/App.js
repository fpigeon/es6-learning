// import TaskCollection from './TaskCollection'

// new TaskCollection([
//     'go to the store',
//     'finish screen cast',
//     'eat cake'
// ]).dump()

let title = 'Red Rising'

if (title.includes('Red') ) { //checks entire string
    console.log(`${title} includes Red`)
}

if (title.startsWith('Red') ) { //checks beginning of string
    console.log(`${title} starts with Red`)
}

if (title.endsWith('ing') ) { //checks the end of string
    console.log(`${title} ends with ing`)
}

console.log(title.repeat(100))

