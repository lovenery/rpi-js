var rpio = require('rpio');

const pin = 12;
rpio.open(pin, rpio.PWM);
rpio.pwmSetClockDivider(64);
rpio.pwmSetRange(pin, 1024);

rpio.pwmSetData(pin, 128);
rpio.sleep(4);

rpio.pwmSetData(pin, 50);
rpio.sleep(2);
