/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Nov 2025
 * This program vounts the number on the screen with neopixels
*/

// variales
let sprite: game.LedSprite = null
let loopCounter: number = 0
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)



input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
        loopCounter = 5
        sprite = game.createSprite (5, 5)
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

        while (loopCounter <= 5) {
            basic.pause(500)
            sprite.set (LedSpriteProperty.X, loopCounter)
            loopCounter = loopCounter - 1

            // Zero out all colors
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.pause(2000)

            if (loopCounter == 4) {
                neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
                neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
                neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
                neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Indigo))
                neopixelStrip.show()
                basic.pause(1000)
            }

            if (loopCounter == 3) {
                neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
                neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
                neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
                neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.show()
                basic.pause(1000)
            }

            if (loopCounter == 2) {
                neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
                neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
                neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.show()
                basic.pause(1000)

            }

            if (loopCounter == 1) {
                neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
                neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.show()
                basic.pause(1000)

            }

        }
        sprite.delete()
        basic.showIcon(IconNames.Happy)
})