bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showArrow(ArrowNames.North)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 50)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showArrow(ArrowNames.South)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 50)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showArrow(ArrowNames.West)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 50)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showArrow(ArrowNames.East)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 50)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        stepperMotor.createMotor(
        DigitalPin.P0,
        DigitalPin.P0,
        DigitalPin.P0,
        DigitalPin.P0
        ).moveClockwise(16, stepUnit.Steps)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        stepperMotor.createMotor(
        DigitalPin.P1,
        DigitalPin.P0,
        DigitalPin.P0,
        DigitalPin.P0
        ).moveAntiClockwise(16, stepUnit.Steps)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    }
})
