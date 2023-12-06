const data = [
    {
        species: "Lima",
        introduction: 
            "La capital y la ciudad más grande de Perú, ubicada en la costa central del país.",
        photo: "images/lima.jpg",
    },
    {
        species: "Cusco",
        introduction: 
            "Conocida como la Capital arqueológica de América, es la puerta de entrada a Machu Picchu y una ciudad llena de historia inca.",
        photo: "images/cusco1.jpg",
    },
    {
        species: "Arequipa",
        introduction: 
            "Conocida como la Ciudad Blanca por su arquitectura de sillar, es la segunda ciudad más grande de Perú.",
        photo: "images/arequipa.webp",
    },
    {
        species: "Trujillo",
        introduction: 
            "Ubicada en la costa norte, Trujillo es famosa por sus sitios arqueológicos preincaicos y su arquitectura colonial.",
        photo: "images/tru.jpg",
    },
    {
        species: "Chiclayo",
        introduction: 
            "Ciudad ubicada en la costa norte, es famosa por su rica herencia cultural y arqueológica.",
        photo: "images/chiclayo.jpeg",
    },
    {
        species: "Piura",
        introduction: 
            "Ubicada en la costa norte, es conocida por sus playas y su gastronomía.",
        photo: "images/piura.jpg",
    },
    {
        species: "Huancayo",
        introduction: 
            "Una ciudad de la sierra central de Perú, rodeada de hermosos paisajes montañosos.",
        photo: "images/huancayo.jpg",
    },
    {
        species: "Puno",
        introduction: 
            "Situada en la orilla del lago Titicaca, es famosa por su folclore y la cercanía a las islas flotantes de los Uros.",
        photo: "images/puno.jpg",
    },
    {
        species: "Ica",
        introduction: 
            "Conocida por sus bodegas de vino y la Reserva Nacional de Paracas, que alberga una gran diversidad de vida marina.",
        photo: "images/ica.jpg",
    },
];

const sliderWrapper = document.querySelector(".slider-wrapper ul");

sliderWrapper.innerHTML = "";
for (let i = 0; i < data.length; i++) {
    sliderWrapper.innerHTML += `
    <li class="slider-item zoom-out" style="--index: ${i}">
        <img src="${data[i].photo}" alt="" />
        <div class="content">
            <span class="species">
                <h1>${data[i].species}</h1>
            </span>

            <span class="line"></span>

            <span class="introduction">
                <p>${data[i].introduction}</p>
            </span>
        </div>
    </li>
    `;
}

const maxIndex = data.length - 1;
const sliderItems = document.querySelectorAll(".slider-item");
const contents = document.querySelectorAll(".content");
const currentOrdinal = document.querySelector(".current-ordinal");
const maxOrdinal = document.querySelector(".max-ordinal");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
var prevIndex = 0;
var currentIndex = 0;
var nextIndex = 0;

sliderItems[0].classList.remove("zoom-out");
sliderItems[1].classList.add("move-right");
contents[0].classList.add("show");

contents.forEach((e) =>{
    const speciesWidth = e.querySelector(".species").offsetWidth - 40;
    e.querySelector(".introduction").style.width = `${speciesWidth}px`;
});

for (let i = 1; i < maxIndex+1; i++) {
    currentOrdinal.innerHTML += `<p>${i}</p>`;
}
currentOrdinal.children[0].classList.add("show");
maxOrdinal.innerHTML = `<p>${maxIndex +1}</p>`;

prevBtn.disabled = true;
nextBtn.disabled = false;

nextBtn.addEventListener("click", () => {
    prevIndex = currentIndex;
    sliderItems[prevIndex].classList.add("zoom-out");
    contents[prevIndex].classList.remove("show");
    nextBtn.disabled = true;

    if(currentIndex < maxIndex) {
        if(currentIndex > 0){
            sliderItems[prevIndex - 1].classList.remove("move-left");
        }
        currentIndex++;
        nextIndex = currentIndex + 1;
        sliderItems[currentIndex].classList.remove("move-right");
    }

    setTimeout(() =>{
        sliderWrapper.style = `--index: ${currentIndex}`;
        sliderItems[prevIndex].children[0].style = "transform: translateX(40%)";
        sliderItems[currentIndex].children[0].style = "transform: translateX(0%)";
        currentOrdinal.children[prevIndex].classList.remove("show");
        currentOrdinal.children[currentIndex].classList.add("show");
    }, 750);

    setTimeout(() => {
        sliderItems[prevIndex].classList.add("move-left");
        sliderItems[currentIndex].classList.remove("zoom-out");

        if (currentIndex < maxIndex) {
            sliderItems[nextIndex].classList.add("move-right");
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }, 1500);

    setTimeout(() => {
        contents[currentIndex].classList.add("show");
    }, 2000);
});

prevBtn.addEventListener("click", () => {
    prevIndex = currentIndex;
    sliderItems[prevIndex].classList.add("zoom-out");
    contents[prevIndex].classList.remove("show");
    prevBtn.disabled = true;

    if(currentIndex > 0) {
        if(currentIndex > maxIndex){
            sliderItems[currentIndex + 1].classList.remove("move-right");
        }
        currentIndex--;
        nextIndex = currentIndex - 1;
        sliderItems[currentIndex].classList.remove("move-left");
    }

    setTimeout(() =>{
        sliderWrapper.style = `--index: ${currentIndex}`;
        sliderItems[prevIndex].children[0].style = "transform: translateX(-40%)";
        sliderItems[currentIndex].children[0].style = 
        "transform: translateX(0%)";
        currentOrdinal.children[prevIndex].classList.remove("show");
        currentOrdinal.children[currentIndex].classList.add("show");
    }, 750);

    setTimeout(() => {
        sliderItems[prevIndex].classList.add("move-right");
        sliderItems[currentIndex].classList.remove("zoom-out");

        if (currentIndex > 0) {
            sliderItems[nextIndex].classList.add("move-left");
            prevBtn.disabled = false;
            nextIndex.disabled = false;
        }
    }, 1500);

    setTimeout(() => {
        contents[currentIndex].classList.add("show");
    }, 2000);
});