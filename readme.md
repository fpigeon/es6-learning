# Learning ES6 with Jeffrey Way
## ES2015 Crash Course
link [https://laracasts.com/series/es6-cliffsnotes/][1]

## CH1
ES6 introduces two new keywords for declaring variables: let and const.

Replace variables`var` use `let` instead to avoid hoisting.

Constants should not change so use `const`.

## Arrows
You can replace the `function` keyword with arrows `=>`

old

```js
class TaskCollection {
    constructor( tasks = [] ) {
        this.tasks = tasks;
    }
    log() {
        this.tasks.forEach(function(task) {
            console.log(task)
        })
    }
}
```

new 

```js
class TaskCollection {
    constructor( tasks = [] ) {
        this.tasks = tasks;
    }
    log() {
        this.tasks.forEach(task => console.log(task) )
    }
}
```

if you have multiple arguments or none you'll need the paranthesis

```js
class TaskCollection {
    constructor( tasks = [] ) {
        this.tasks = tasks;
    }
    log() {
        this.tasks.forEach((index, task) => console.log(task index) )
    }
}
```

When using arrow syntax `this` refers to the `TaskCollection` not the `Window` object.

You don't have to add return with arrow syntax it is implicit.

```js
let names = ["Jeffrey", "Taylor", "Frank"]

// old
names = names.map(function(name){ 
    return name + ' is cool.'
})

console.log(names)

// new
names = names.map((name) => name + ' is cool.')

console.log(names)
```

## Default Parameters
ES6 Supports passing in default parameters

```js
// old
function applyDiscount(cost, discount) {
    discount = discount || .10

    return cost - (cost * discount)
}

alert(applyDiscount(100))

// new
function applyDiscount(cost, discount = .10) {
    return cost - (cost * discount)
}

alert(applyDiscount(100))
```

## Crash and Rest
We can use rest aka `...` to say take all the arguments and make them an array.

```js
//old
function sum(...numbers) {
    return numbers.reduce(function(prev, current){
        return prev + current
    })
}
// you can add as many arguments as you want
console.log(sum(1, 2, 6))
````

```js
// new 
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current)
}

//you can add as many arguments as you want
console.log(sum(1, 2, 6))
```

Spread operator is the opposite of rest and will take an array and make them single arguments.

```js
// spread operator
function sum(x, y) {
    return x + y
}

let nums = [5,10]

//spread operator ...
console.log(sum(...nums))
```







[1]: https://laracasts.com/series/es6-cliffsnotes/