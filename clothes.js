const temperatureInput = document.querySelector('#temperature');
const result = document.querySelector('#result');
const whatToWearButton = document.querySelector('#whatToWear');

whatToWearButton.addEventListener("click", function()  {
    const temperature = temperatureInput.value
    
    if(temperature >= 85){
        result.textContent = "Lightweight clothing and a reminder to stay hydrated";

    } else if(temperature >= 70 && temperature < 85){
        result.textContent = "T shirt or light clothing";
    } else if(temperature >= 50 && temperature < 70){
        result.textContent = "A light jacket or sweater";
    } else{
        result.textContent = "Coat or heavy Jacket";
    }
    
    console.log("Button clicked");
    console.log("Temperature input value:", temperature);
})
