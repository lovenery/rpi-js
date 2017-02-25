const wpi = require("wiring-pi")
wpi.setup('wpi') 

var isLedOn = 0
wpi.pinMode(7, wpi.OUTPUT)
function flashLED(pin, duration) {
    return setInterval(function() {
        isLedOn =  +!isLedOn
        wpi.digitalWrite(pin, isLedOn)
        console.log(isLedOn)
    }, duration);
}
 
var intervalID = flashLED(7, 500);
 
setTimeout(function() {
    clearInterval(intervalID);
    console.log('cleared')
}, 6000);
