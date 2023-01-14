function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Symon',
    age: 20,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, callnumber) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Callnumber is ${callnumber}`)
        console.groupEnd()
    }
}

const lina = {
    name: 'Alena',
    age: 21
}

// const fnLinaInfoLog = person.logInfo.bind(lina)
// fnLinaInfoLog('Frontend', `0-999-512-33-44`)

// const fnLinaInfoLog = person.logInfo.bind(lina, 'Frontend', `0-999-512-33-44`)
// fnLinaInfoLog()

// person.logInfo.bind(lina, 'Frontend', `0-999-512-33-44`)()
// person.logInfo.call(lina, 'Frontend', `0-999-512-33-44`)
// person.logInfo.apply(lina, ['Frontend', `0-999-512-33-44`])

// -------------------------------------------------------------------------------

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }
// console.log(multBy(array, 17))

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(2))