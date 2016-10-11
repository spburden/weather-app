var apiKey = require('./../.env').apiKey;
var Temperature = require('./../js/temperature.js').temperatureModule;

$(document).ready(function(){
  var newTemperature = new Temperature();
  $("#forecast").submit(function(event){
    event.preventDefault();
    $("#cityName").empty();
    $(".weatherOutput").empty();
    var city = $("#city").val();
    $("#city").val("");
    $("#cityName").text(city + " Forecast");
    $.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=5&appid=' + apiKey, function(response) {
      console.log(response);
      for (var i = 0; i < response.list.length; i++) {
        var celsius = Math.round(newTemperature.celsius(response.list[i].temp.day));
        var fahrenheit = Math.round(newTemperature.fahrenheit(response.list[i].temp.day));
        var date = new Date(parseInt(response.list[i].dt) * 1000);
        console.log(response.list[i].weather[0].description);
        var htmlString = "<div class='col-sm-2'><h3>" +
          (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() +
          "</h3> <h3>" + celsius + "&#8451 / " + fahrenheit + "&#8457</h3><h4>" +
          response.list[i].weather[0].description + "</h4><p><img src='http://openweathermap.org/img/w/" +
          response.list[i].weather[0].icon + ".png'></p></div>";
        $(".weatherOutput").append(htmlString);
        // $("#celsius" + i).text(celsius);
        // $("#fahrenheit" + i).text(fahrenheit);
        // $("#humidity" + i).text(response.main.humidity + "%");
      }
    });
  });
});
