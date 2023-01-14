const person = Object.create({
    calculateAge() {
        console.log('Age:', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Semyon',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 2002,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(v) {
            document.body.style.background = 'lightgray'
            console.log('Set age', v)
        }
    }
})

// person.name = 'Max'
// person.birthYear = 2000

for (let key in person){
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
}