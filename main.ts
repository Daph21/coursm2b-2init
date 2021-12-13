input.onButtonPressed(Button.A, function () {
    strip.rotate(1)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.rotate(-1)
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
strip.show()
