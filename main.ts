input.onGesture(Gesture.ScreenDown, function () {
    if (kalan_miktar > ulasim_ucreti) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        kalan_miktar += -2
        basic.showString("Kalan")
        basic.showNumber(kalan_miktar)
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("Yerterli Bakiyeniz yok")
    }
})
let kalan_miktar = 0
let ulasim_ucreti = 0
let yuklenen_miktar = 5
ulasim_ucreti = 2
kalan_miktar = yuklenen_miktar
