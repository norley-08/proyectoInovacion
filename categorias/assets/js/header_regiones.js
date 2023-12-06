const imagesContainer = document.querySelector('.image-container');

// Clonar las imágenes y añadirlas al final para crear un bucle
const images = document.querySelectorAll('.image-container img');
images.forEach(img => {
    const clone = img.cloneNode(true);
    imagesContainer.appendChild(clone);
});

// Iniciar la animación cuando las imágenes se hayan cargado
window.onload = () => {
    const totalWidth = imagesContainer.scrollWidth / 2;
    imagesContainer.style.width = totalWidth + 'px';
};

// Animación de desplazamiento
const scrollSpeed = 1; // Velocidad de desplazamiento (en pixels/frame)
function scrollImages() {
    imagesContainer.scrollLeft += scrollSpeed;
    if (imagesContainer.scrollLeft >= imagesContainer.scrollWidth / 2) {
        imagesContainer.scrollLeft = 0;
    }
}

setInterval(scrollImages, 30); // Llamar a scrollImages cada 30ms para animar el desplazamiento
