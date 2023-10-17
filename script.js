function updateLocation() {
    const locationText = document.getElementById("location-text");
    // Puedes utilizar una API de geolocalización o ingresar la ubicación manualmente aquí.
    // Por ejemplo:
    locationText.innerText = "Sudamérica";
}

function updateDateTime() {
    const datetimeText = document.getElementById("datetime-text");
    const now = new Date();
    datetimeText.innerText = now.toLocaleString();
}

window.addEventListener("load", () => {
    updateLocation();
    updateDateTime();
    // Actualiza la fecha y hora cada segundo.
    setInterval(updateDateTime, 1000);
});
