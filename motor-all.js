var rpio = require('rpio');

const lpin1 = 11;
const lpin2 = 13;
const rpin1 = 16;
const rpin2 = 18;

rpio.open(lpin1, rpio.OUTPUT, rpio.LOW);
rpio.open(lpin2, rpio.OUTPUT, rpio.LOW);
rpio.open(rpin1, rpio.OUTPUT, rpio.LOW);
rpio.open(rpin2, rpio.OUTPUT, rpio.LOW);

function stop() {
    rpio.write(lpin1, rpio.LOW);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.LOW);
    rpio.write(rpin2, rpio.LOW);
}

function forward() {
    rpio.write(lpin1, rpio.HIGH);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.HIGH);
    rpio.write(rpin2, rpio.LOW);
    rpio.msleep(1000);
    stop()
}

forward()
rpio.sleep(3)
forward()
