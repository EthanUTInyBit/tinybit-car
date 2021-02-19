input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Tinybit.Music_Car(Tinybit.enMusic.dadadum)
    Tinybit.RGB_Car_Big2(66, 108, 245)
})
if (input.buttonIsPressed(Button.A)) {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
}
