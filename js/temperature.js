function Temperature(kelvin) {
  this.kelvin = kelvin;
}

Temperature.prototype.fahrenheit() {
  var fahrenheit = this.kelvin * (9/5) - 459.67;
  return fahrenheit;
}

Temperature.prototype.celsius() {
  var celsius = this.kelvin − 273.15;
  return celsius;
}

exports.temperatureModule = Temperature;
