
const cityInput = document.getElementById("inputCity");
const resultElement = document.getElementById("resultado");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    const city = cityInput.value;
    const response = await fetch(`http://localhost:3000/weather?city=${city}`);
    const data = await response.json();
    mostrarResultado(data);
});

function mostrarResultado(data) {
    resultElement.innerHTML = `
    <p><strong>Ciudad</strong>: ${data.name}</p>
    <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
    <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
    <p><strong>Humedad:</strong> ${data.main.humidity} <p> 
    <p><strong>Presion Atmosferica: </strong > ${data.main.pressure}</p>
    <p> <strong>Vientos : </strong> ${data.wind.speed} <p>
  `;
}
