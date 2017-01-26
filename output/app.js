'use strict';

// // Let and Const
// function fire(bool) {
//     let foo = 'bar'
//     if (bool) {
//         console.log(foo)
//     } else {
//         console.log(foo)
//     }
// }

// fire(false)

// // Arrows
// class TaskCollection {
//     constructor( tasks = [] ) {
//         this.tasks = tasks;
//     }
//     prepare() {
//         this.tasks.forEach(task => {
//             console.log(this)
//         })
//     }
// }

// class Task{
//     toGulp() {
//         console.log('converting to gulp')
//     }
// }

// new TaskCollection([
//     new Task, new Task, new Task
// ]).prepare()

// // return not needed example
// let names = ["Jeffrey", "Taylor", "Frank"]

// // old way 
// names = names.map(function(name){ 
//     return name + ' is cool.'
// })

// console.log(names)

// // new
// names = names.map((name) => name + ' is cool.')

// console.log(names)

// old
// function applyDiscount(cost, discount) {
//     discount = discount || .10

//     return cost - (cost * discount)
// }

// alert(applyDiscount(100))

// new
// function defaultDiscount(){
//     return .25
// }

// function applyDiscount(cost, discount = defaultDiscount()) {
//     return cost - (cost * discount)
// }

// alert(applyDiscount(100))

// function sum(...numbers) {
//     return numbers.reduce(function(prev, current){
//         return prev + current
//     })

// }

// console.log(sum(1, 2, 6, 9 , 100))

// spread operator
// function sum(x, y) {
//     return x + y
// }

// let nums = [5,5]

// //spread operator ...
// console.log(sum(...nums))
// function sum(...numbers) {
//     return numbers.reduce((prev, current) => prev + current)
// }
// //you can add as many arguments as yqou want
// console.log(sum(1, 2, 6))

//old 
// let name = 'foo' + 'bar' + 'baz'

// //new 
// let name = "Frank"

// let template = `
//     <div class="ALert">
//         <p>${name}</p>
//     </div>
// `.trim()

// console.log(template)

// old 
// function getPerson() {
//     let name = "John"
//     let age = 25

//     return {
//         name: name,
//         age: age
//     }
// }

// old 
// function getPerson() {
//     let name = "John"
//     let age = 25

//     return {
//         name, 
//         age,
//         greet: function() {
//             return 'Hello ' + this.name
//         }
//     }
// }

// new 
// function getPerson() {
//     let name = "John"
//     let age = 25

//     return {
//         name, 
//         age,
//         greet() {
//             return `Hello ${this.name}`
//         }
//     }
// }

// console.log(getPerson().greet() );

// Object Destructuring
// allows an object to be broken down into variables

// let data = {
//     name: 'Karen',
//     age: 32,
//     results: ['foo', 'bar'],
//     count: 30

// }
// new
// function getData({ results, count }) { 
//     console.log(results, count)
// }

// getData({
//     name: 'Karen',
//     age: 32,
//     results: ['foo', 'bar'],
//     count: 30
// })

//old
function greet(person) {
    var name = person.name;
    var age = person.age;

    console.log('old.Hello, ' + name + '. You are ' + age + ' years old.');
}

greet({
    name: 'Luke',
    age: 32
});

//new 
function greet(_ref) {
    var name = _ref.name,
        age = _ref.age;

    console.log('Hello, ' + name + '. You are ' + age + ' years old.');
}

greet({
    name: 'Luke',
    age: 32
});
