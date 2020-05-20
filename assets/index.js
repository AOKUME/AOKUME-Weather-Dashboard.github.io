//======================= API key =======================//
var APIKey = "7b7da8f7f0400b14633ffa73f109e78d";

//======================= Current Weather Call =======================//
var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=" + APIKey + '&units=imperial';

$.ajax({
    url: weatherQueryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    console.log(response.name + "," + response.sys.country)
    console.log(response.main.humidity)
    console.log(response.wind.speed)
    console.log(response.main.temp)
    console.log(response.weather[0].description)
    console.log(response.weather[0].icon)

    var icon = response.weather[0].icon;

    $(".city").html(response.name + "," + response.sys.country);
    $('.combo').html("Humidity: " + response.main.humidity + " - " + " Wind: " + response.wind.speed);
    $('.temp').html(response.main.temp + "°F");
    $('.desc').html("Description: " + response.weather[0].description);
    $('.icon').html(`<img src='http://openweathermap.org/img/wn/${icon}.png' class="img-fluid weather-icon" alt="weather icon">`);
});

//======================= 5-Day Forecast Call =======================//

var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Chicago&appid=" + APIKey + '&units=imperial';

$.ajax({
    url: forecastQueryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    console.log(response.list[0].main.temp);
    console.log(response.list[0].main.humidity);
    console.log(response.list[0].weather[0].icon);

    // Day 1 //
    var icon1 = response.list[6].weather[0].icon;
    $('.temp1').html(response.list[6].main.temp + "°");
    $('.humi1').html("Humidity: " + response.list[6].main.humidity);
    $('.icon1').html(`<img src='http://openweathermap.org/img/wn/${icon1}.png' class="img-fluid weather-icon" alt="weather icon">`);

    // Day 2 //
    var icon2 = response.list[14].weather[0].icon;
    $('.temp2').html(response.list[14].main.temp + "°");
    $('.humi2').html("Humidity: " + response.list[14].main.humidity);
    $('.icon2').html(`<img src='http://openweathermap.org/img/wn/${icon2}.png' class="img-fluid weather-icon" alt="weather icon">`);

    // Day 3 //
    var icon3 = response.list[22].weather[0].icon;
    $('.temp3').html(response.list[22].main.temp + "°");
    $('.humi3').html("Humidity: " + response.list[22].main.humidity);
    $('.icon3').html(`<img src='http://openweathermap.org/img/wn/${icon3}.png' class="img-fluid weather-icon" alt="weather icon">`);

    // Day 4 //
    var icon4 = response.list[30].weather[0].icon;
    $('.temp4').html(response.list[30].main.temp + "°");
    $('.humi4').html("Humidity: " + response.list[30].main.humidity);
    $('.icon4').html(`<img src='http://openweathermap.org/img/wn/${icon4}.png' class="img-fluid weather-icon" alt="weather icon">`);

    // Day 5 //
    var icon5 = response.list[38].weather[0].icon;
    $('.temp5').html(response.list[38].main.temp + "°");
    $('.humi5').html("Humidity: " + response.list[38].main.humidity);
    $('.icon5').html(`<img src='http://openweathermap.org/img/wn/${icon5}.png' class="img-fluid weather-icon" alt="weather icon">`);
});

//======================= Time & Date =======================//

$(document).ready(function() {

    var dateAndYear = moment().format('MMMM Do, YYYY');
    $('#currentDay').html(dateAndYear);
    console.log(dateAndYear);

    var timeHMS = moment().format('h:mm a');
    $('#currentHour').html(timeHMS);
    console.log(timeHMS);

//================== Forecast Time & Date ===================//

    // Day 1 //
    var forecastDay1 = moment().add(1, 'days').format('L');
    $('.date1').html(forecastDay1);

    // Day 2 //
    var forecastDay2 = moment().add(2, 'days').format('L');
    $('.date2').html(forecastDay2);

    // Day 3 //
    var forecastDay3 = moment().add(3, 'days').format('L');
    $('.date3').html(forecastDay3);

    // Day 4 //
    var forecastDay4 = moment().add(4, 'days').format('L');
    $('.date4').html(forecastDay4);

    // Day 5 //
    var forecastDay5 = moment().add(5, 'days').format('L');
    $('.date5').html(forecastDay5);
});
