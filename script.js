const map = L.map('map').setView([-9.1900, -75.0152], 6); // Coordenadas del centro de Perú y nivel de zoom
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
