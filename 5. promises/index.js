console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 3000)
// }, 2000)

// Уже 2 вложенности, если их будет больше, то это потенциально большой и трудный код с большим кол-вом вложенностей

// const p = new Promise(function (resolve, reject) {
//
//     setTimeout(() => {
//
//         console.log('Preparing data...')
//
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     console.log('Promise resolved', data)
// })

// p.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//
//     p2.then(clientData => {
//         console.log('Data received', clientData)
//     })
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// }).then(clientData => {
//     console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log('Modified', data)
// }).catch(err => console.log('Error: ', err))
//     .finally(() => console.log('Finally'))

// Всего один уровень вложенности, можно чейнить (chain)

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(() => console.log('After 2 sec'))
sleep(4000).then(() => console.log('After 4 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})