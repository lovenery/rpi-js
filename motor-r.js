var rpio = require('rpio');

const pin1 = 11;
const pin2 = 13;
rpio.open(pin1, rpio.OUTPUT, rpio.LOW);
rpio.open(pin2, rpio.OUTPUT, rpio.LOW);

// 前進
rpio.write(pin1, rpio.HIGH);
rpio.sleep(1);
rpio.write(pin1, rpio.LOW);

rpio.msleep(1000);

// 後退
rpio.write(pin2, rpio.HIGH);
rpio.sleep(1);
rpio.write(pin2, rpio.LOW);

rpio.close(pin1)
rpio.close(pin2)
