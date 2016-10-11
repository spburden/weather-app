var Temperature = require('./../js/temperature.js').temperatureModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#btn").click(function(event){
    alert("CLICKED");
    event.preventDefault();
    var city = $("#city").val();
    $("#city").val("");
    $("#cityName").text(city + " Humidity:");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);
    });
  });
});
