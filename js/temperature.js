function Temperature() {

}

Temperature.prototype.fahrenheit = function(kelvin){
  var fahrenheit = kelvin * (9/5) - 459.67;
  return fahrenheit;
};

Temperature.prototype.celsius = function(kelvin){
  var celsius = kelvin-273.15;
  return celsius;
};

exports.temperatureModule = Temperature;
