var data = [
    {
        img: "images/machupicchu.jpg",
        country: "Peru",
        place: "Cusco",
        describe: "Machu Picchu, la joya arqueológica de Perú, es un antiguo sitio inca situado en lo alto de los Andes. Con su arquitectura impresionante y vistas panorámicas, es un testimonio de la destreza de los incas en la construcción de ciudades en las alturas.",
    },
    {
        img: "images/danzasperuanas.webp",
        country: "Peru",
        place: "Danzas Tradicionales",
        describe: "Las danzas folklóricas peruanas son una parte esencial de la cultura. Esta imagen muestra una colorida presentación de danzas tradicionales que celebran la diversidad y la historia del país.",
    },
    {
        img: "images/artesaniaandina.jpg",
        country: "Peru",
        place: "Artesania Andina",
        describe: "La artesanía andina peruana es famosa en todo el mundo. Esta imagen muestra la habilidad de los artesanos locales que crean textiles, cerámica y más, llevando consigo tradiciones ancestrales.",
    },
    {
        img: "images/inti.jpg",
        country: "Peru",
        place: "Festival Inti Raymi",
        describe: "El Festival del Sol, o Inti Raymi, es una celebración anual en Cusco que rinde homenaje al dios sol inca. Esta imagen captura la magnificencia de la ceremonia y la conexión espiritual con la naturaleza.",
    },
    {
        img: "images/nazca.jpg",
        country: "Peru",
        place: "Arqueología en Nazca",
        describe: "Las líneas de Nazca son misteriosas figuras geoglíficas que se encuentran en el desierto de Nazca. Esta imagen muestra una de las figuras esculpidas en la tierra por culturas antiguas.",
    },
];

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for(let i = 0; i < data.length; i++){
    introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="country" style="--idx: 0">${data[i].country}</h5>
            </span>
            <span>
                <h1 class="place" style="--idx: 1">${data[i].place}</h1>
            </span>
            <span>
                <p class="describe" style="--idx: 2">${data[i].describe}</p>
            </span>
        </div>
        `;

        ordinalNumber.innerHTML += `<h2>${i + 1}</h2>`;
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(
    ".thumbnail-list .wrapper"
);
thumbnailListWrapper.innerHTML += `
    <div class="thumbnail zoom">
        <img src="${data[0].img}" alt="">
    </div>
`;
for (let i = 1; i < data.length; i++) {
    thumbnailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i - 1}">
        <img src="${data[i].img}" alt="">
    </div>
    `;
}

const nextBtn = document.querySelector(".navigation .next-button");
var currenIndex = 0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    var clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);

    for (let i = 2; i < thumbnailListWrapper.childElementCount; i++){
        thumbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }
    if (currenIndex < data.length - 1){
        currenIndex++;
    } else currenIndex = 0;
    for (let i = 0; i < data.length; i++){
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currenIndex].classList.add("active");
    ordinalNumber.children[currenIndex].classList.add("active");
    ordinalNumber.children[currenIndex].textContent = `0${currenIndex + 1}`;
});
