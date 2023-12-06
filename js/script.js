// Obtiene la lista de regiones del mapa.
const regiones = document.querySelectorAll('#mapa-peru svg polygon');

// Agrega un evento click a cada región.
for (const region of regiones) {
  region.addEventListener('click', () => {
    // Muestra el nombre de la región en la consola.
    console.log(region.id);
  });
}
