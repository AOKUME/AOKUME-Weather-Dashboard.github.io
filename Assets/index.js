// This is our API key. Add your own API key between the ""
var APIKey = "7b7da8f7f0400b14633ffa73f109e78d";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey + '&units=imperial';

// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
//    console.log(response);
//    $(".city").html(`<h1>${response.name}</h1>`);
    $('.wind').html(response.wind.speed);
    $('.humidity').html(response.main.humidity);
    $('.temp').html(response.main.temp);
    $('.temp').html(response.main.temp);
    // Create CODE HERE to Log the queryURL
    // Create CODE HERE to log the resulting object
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // Create CODE HERE to transfer content to HTML
    // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
    // function temperatureConverter(valNum) {
    //     valNum = parseFloat(valNum);
    //     document.getElementById("outputFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
    // }
    // Create CODE HERE to dump the temperature content into HTML

});
