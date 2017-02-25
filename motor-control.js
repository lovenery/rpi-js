var rpio = require('rpio');
var keypress = require('keypress');
keypress(process.stdin);

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
const sleepTime = 500
function forward() {
    rpio.write(lpin1, rpio.HIGH);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.HIGH);
    rpio.write(rpin2, rpio.LOW);
    rpio.msleep(sleepTime);
    stop()
}
function backword() {
    rpio.write(lpin1, rpio.LOW);
    rpio.write(lpin2, rpio.HIGH);
    rpio.write(rpin1, rpio.LOW);
    rpio.write(rpin2, rpio.HIGH);
    rpio.msleep(sleepTime);
    stop()
}
function trunright() {
    rpio.write(lpin1, rpio.HIGH);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.LOW);
    rpio.write(rpin2, rpio.LOW);
    rpio.msleep(sleepTime);
    stop()
}
function trunleft() {
    rpio.write(lpin1, rpio.LOW);
    rpio.write(lpin2, rpio.LOW);
    rpio.write(rpin1, rpio.HIGH);
    rpio.write(rpin2, rpio.LOW);
    rpio.msleep(sleepTime);
    stop()
}

process.stdin.on('keypress', function (ch, key) {
    //console.log('got "keypress"', key);
    switch(key.name) {
        case 'w':
            forward();
            break;
        case 's':
            backword();
            break;
        case 'a':
            trunleft();
            break;
        case 'd':
            trunright();
            break;
        default:
            break;
    }
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});
process.stdin.setRawMode(true);
process.stdin.resume();


