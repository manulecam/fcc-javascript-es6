// Cambia solo el código debajo de esta línea
class Thermostat {
  constructor (fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  //  getter
  get temperature() {
    return (5/9) * (this._fahrenheit - 32);
  }
  // setter
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius
