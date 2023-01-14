// 1 part
const person = {
    name: 'Simon',
    age: 20,
    job: 'Front-End'
}

const op = new Proxy(person, {
    get(target, p, receiver) {
        // console.log('Target:', target)
        // console.log('Prop:', p)
        // console.log(`Getting prop: ${p}`)
        if (!(p in target)) {
            return p.split('_').map(p => target[p]).join(' ')
        }
        return target[p]
    },
    set(target, p, value, receiver) {
        if (p in target) {
            target[p] = value
        } else {
            throw new Error(`No ${p} field in target`)
        }
    },
    has(target, p) {
        return ['age', 'name', 'job'].includes(p)
    },
    deleteProperty(target, p) {
        console.log('Deleting... ', p)
        delete target[p]
        return true
    }
})

// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('Calling fn...')

        return target.apply(thisArg, argArray).toUpperCase()
    }
})

// Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray, newTarget) {
        // console.log('Construct...')
        // return new target(...argArray)
        return new Proxy(new target(...argArray), {
            get(target, p, receiver) {
                console.log(`Getting prop "${p}"`)
                return target[p]
            }
        })
    }
})

const p = new PersonProxy('Maxos', 30)

// 2 part

// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue({
    x: 24,
    y: 42
}, 0)

// console.log(position)

// Hidden properties

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const data = withHiddenProps({
    name: 'Serezha',
    age: 20,
    _uid: '22281'
})

// Optimization

// const userData = [
//     {id: 1, name: 'Semyon', job: 'Front-End', age: 20},
//     {id: 2, name: 'Serezha', job: 'KFC-King', age: 21},
//     {id: 3, name: 'Kirina', job: 'Chemist', age: 19}
// ]
// const index = {}
// userData.forEach(i => (index[i.id] = i))

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id: 1, name: 'Semyon', job: 'Front-End', age: 20},
    {id: 2, name: 'Serezha', job: 'KFC-King', age: 21},
    {id: 3, name: 'Kirina', job: 'Chemist', age: 19}
])