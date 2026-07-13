const temperature = 8;
const windSpeed = 12;
const windChillTarget = document.getElementById('windChill');

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

if (windChillTarget) {
  let windChillOutput = 'N/A';

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillOutput = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
  }

  windChillTarget.textContent = windChillOutput;
}
