function calcValues (a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

// const result = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]

// const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10)
// console.log(sum, mult, other, sub)

// Objects

const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const name = person.name
// const {
//     name: firstName = 'noname',
//     age,
//     car = 'Машины нет',
//     address: {city: homeTown, country}
// } = person
// console.log(firstName, age, car, homeTown, country)

// const {name, ...info} = person
// console.log(name, info)

function logPerson ({name, age}) {
    console.log(name + ' ' + age)
}

logPerson(person)