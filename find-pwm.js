var rpio = require('rpio')
rpio.init({gpiomem: false, mapping: 'physical'})

let count = 0
let pins = [];

for (let pin = 1; pin <= 40; pin++) {
    let valid = true
    try {
        //console.log("pin: " + pin)
        rpio.open(pin, rpio.PWM)
        rpio.close(pin)
    } catch (err) {
        //console.log("error: " + pin)
        valid = false
    }

    if (valid) {
        ++count
        pins.push(pin)
    }
}
console.log("#################")
console.log("Total PWM pins: " + count)
console.log("Pins: ")
pins.forEach(function(pin, i, arr) {
    console.log(pin)
})
console.log("#################")
