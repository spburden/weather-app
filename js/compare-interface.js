var Temperature = require('./../js/temperature.js').temperatureModule;
$(document).ready(function(){
  var temp = new Temperature();
  $("#compare").submit(function(event){
    event.preventDefault();
    var city1 = $("#city1").val();
    var city2 = $("#city2").val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=' + apiKey).then(function(response1) {
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city2 + '&appid=' + apiKey).then(function(response2){
        var temp1F = temp.fahrenheit(response1.main.temp);
        var temp2F = temp.fahrenheit(response2.main.temp);
        var difference = Math.round(getTempDiff(temp1F, temp2F));
        if(difference < 0){
          $("#diffDisplay").text(city1 + " is cooler than " + city2 + " by " + Math.abs(difference) + " degrees Fahrenheit");
        } else if (difference > 0) {
          $("#diffDisplay").text(city1 + " is warmer than " + city2 + " by " + difference + " degrees Fahrenheit");
        } else {
          $("#diffDisplay").text(city1 + " and " + city2 + " are the same temperature! OMG!");
        }
      });
    });
  });
});

function getTempDiff(temp1, temp2){
  var result = temp1 - temp2;
  return result;
}
