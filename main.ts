let sonar_reading = 0
basic.forever(function () {
    sonar_reading = CutebotPro.ultrasonic(SonarUnit.Inches)
    if (sonar_reading > 15) {
        CutebotPro.pwmCruiseControl(50, 50)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ff00)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (sonar_reading > 12) {
        CutebotPro.pwmCruiseControl(45, 45)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ff00)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (sonar_reading > 9) {
        CutebotPro.pwmCruiseControl(40, 40)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffff00)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (sonar_reading > 6) {
        CutebotPro.pwmCruiseControl(35, 35)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffff00)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (sonar_reading > 3) {
        CutebotPro.pwmCruiseControl(30, 30)
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xff8000)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else {
        CutebotPro.pwmCruiseControl(0, 0)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
