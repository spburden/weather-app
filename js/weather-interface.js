var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var city = $("#city").val();
    $("#city").val("");
    $("#cityName").text(city + " Humidity:");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $("#humidity").text(response.main.humidity + "%");
    });
  });
});
