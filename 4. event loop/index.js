console.log('Start')

console.log('Start 2')

function timeout5sec() {
    console.log('timeout5sec')
}

setTimeout(timeout5sec, 5000)

window.setTimeout(function () {
    console.log('Inside timeout, after 2 seconds')
}, 2000)

console.log('End')