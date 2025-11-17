const temperature = 26;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
    return (temp <= 10 && wind > 4.8)
        ? 13.12 + 0.6215*temp - 11.37*Math.pow(wind,0.16) + 0.3965*temp*Math.pow(wind,0.16)
        : "N/A";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    document.getElementById('temperature').textContent = temperature + '°C';
    document.getElementById('windspeed').textContent = windSpeed + ' km/h';
    document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);
});