var rpio = require('rpio');

const pin = 12;
rpio.open(pin, rpio.OUTPUT, rpio.LOW);

for (var i = 0; i < 5; i++) {
        /* On for 1 second */
        rpio.write(pin, rpio.HIGH);
        console.log('Pin is currently set ' + (rpio.read(pin) ? 'high' : 'low'));
        rpio.sleep(1);

        /* Off for half a second (500ms) */
        rpio.write(pin, rpio.LOW);
        console.log('Pin is currently set ' + (rpio.read(pin) ? 'high' : 'low'));
        rpio.msleep(500);
}

rpio.close(pin)
