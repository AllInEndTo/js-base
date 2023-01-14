// const person = {
//     name: 'Symon',
//     age: 20,
//     greet: function () {
//         console.log('Greetings!')
//     }
// }

const person = new Object( {
    name: 'Symon',
    age: 20,
    greet: function () {
        console.log('Greetings!')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello!')
}

const lina = Object.create(person)
lina.name = 'Alena'

// const str = 'I am string'

const str = new String('I am string')