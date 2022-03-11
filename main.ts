input.onButtonPressed(Button.A, function () {
    serial.writeString("" + (input.temperature()))
    serial.writeLine("CELSIUS")
    basic.showNumber(input.temperature())
    basic.showString("CELSIUS")
})
input.onButtonPressed(Button.B, function () {
    if (25 < 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
