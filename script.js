console.log("background brightness: " + document.querySelector("#brightnessSlider").value)

function brightness() {
    
    var brightnessSliderValue = document.querySelector("#brightnessSlider").value;
    var brightness = "hsl(30, 20%, " + brightnessSliderValue + "%)"
    var textBrightness = "hsl(0, 0%, 0%)";

    document.querySelector(":root").style.setProperty("--background-color", brightness)

    if (brightnessSliderValue > 37) {
        textBrightness = "hsl(0, 0%, 0%)";
    }
    
    if (brightnessSliderValue <= 37) {
        textBrightness = "hsl(0, 0%, 70%)";
    }
        
    document.querySelector(":root").style.setProperty("--text-color", textBrightness);


    console.log("background brightness: " + brightnessSliderValue);
    console.log("text brightness: " + textBrightness);
}