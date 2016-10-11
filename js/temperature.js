function Temperature(kelvin) {
  this.kelvin = kelvin;
}

Temperature.prototype.fahrenheit = function(){
  var fahrenheit = this.kelvin * (9/5) - 459.67;
  return fahrenheit;
};

Temperature.prototype.celsius = function(){
  var celsius = this.kelvin-273.15;
  return celsius;
};

exports.temperatureModule = Temperature;
