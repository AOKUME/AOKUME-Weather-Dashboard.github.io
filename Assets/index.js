// This is our API key. Add your own API key between the ""
var APIKey = "7b7da8f7f0400b14633ffa73f109e78d";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey + '&units=imperial';

// We then created an AJAX call //
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    console.log(response) //
    var icon = response.weather[0].icon
    $(".city").html(response.name);
    $('.wind').html("Wind: " + response.wind.speed);
    $('.humidity').html("Humidity: " + response.main.humidity);
    $('.temp').html("temp: " + response.main.temp);
    $('.temp').html("temp: " + response.main.temp);
    $('.desc').html(response.weather[0].description);
    $('.ico').html(`<br><img src='http://openweathermap.org/img/wn/${icon}.png' class="img-fluid" alt="weather icon">`);
});

$(document).ready(function() {

    var dateAndYear = moment().format('MMMM Do, YYYY');
    $('#currentDay').html(dateAndYear);
    console.log(dateAndYear);

    var timeHMS = moment().format('h:mm:ss a');
    $('#currentHour').html(timeHMS);
    console.log(timeHMS);
});
