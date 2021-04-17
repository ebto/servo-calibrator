input.onButtonPressed(Button.A, function () {
    angle = Math.max(5, angle + 5)
    pins.servoWritePin(AnalogPin.P15, angle)
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    angle = Math.min(175, angle - 5)
    pins.servoWritePin(AnalogPin.P15, angle)
    led.stopAnimation()
})
let angle = 0
pins.servoWritePin(AnalogPin.P15, 0 + 5)
basic.pause(2000)
pins.servoWritePin(AnalogPin.P15, 180 - 5)
basic.pause(2000)
angle = 90
pins.servoWritePin(AnalogPin.P15, angle)
basic.forever(function () {
    basic.showNumber(angle)
})
