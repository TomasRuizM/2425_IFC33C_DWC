let datosTabla = [
    { titol: "La Balanguera", idiomaOriginal: "ca" },
    { titol: "Merry Christmas", idiomaOriginal: "en" },
    { titol: "Frère Jacques", idiomaOriginal: "fr" },
    { titol: "Sant Antoni i el Dimoni", idiomaOriginal: "ca" }
];

let nuevoArray = [...datosTabla];

for (let i = 0; i < 96; i++) {
    nuevoArray.push(datosTabla[3]);
}

let header = document.createElement("header");

header.style.cssText = 
`
background-color: #c51d1d;
color: white;
padding: 10px 20px;
text-align: left;
display: flex;
justify-content: space-between;
margin-bottom: 30px;
`;

let titulo = document.createElement("h1");
titulo.innerText= "Score Finder";
titulo.style.margin=0;
header.appendChild(titulo);

let navbar = document.createElement("nav");
let redirectToPartitures = document.createElement("a");
redirectToPartitures.innerText = "Partitures";
navbar.appendChild(redirectToPartitures);

let redirectToLogin = document.createElement("a");
redirectToLogin.innerText = "Login";
redirectToLogin.style.cursor="pointer";

navbar.appendChild(redirectToLogin);
navbar.style.cssText =
`
display: flex;
gap: 15px;
`;

header.appendChild(navbar);

document.body.appendChild(header);

let newScore = document.createElement("div");
newScore.innerText="Nova Partitura";

newScore.style.cssText = 
`
background-color: #c51d1d;
color: white;
text-align: center;
padding: 10px;
font-weight: bold;
cursor: pointer;
`;

document.body.appendChild(newScore);

let tablaContainer = document.createElement("div");
tablaContainer.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`;

let tabla = document.createElement("table");
let thead = document.createElement("thead");
let tr = document.createElement("tr");

let thTitol = document.createElement("th");
thTitol.innerText = "Títol";
thTitol.style.padding = "10px"

let thIdioma = document.createElement("th");
thIdioma.innerText = "Idioma Original";

let thAccions = document.createElement("th");
thAccions.innerText = "Accions";

tr.appendChild(thTitol);
tr.appendChild(thIdioma);
tr.appendChild(thAccions);

thead.appendChild(tr);
tabla.appendChild(thead);

thead.style.backgroundColor = "#c51d1d";
thead.style.color = "white";

tabla.style.cssText = `
    width: 90%;
    border-collapse: collapse;
    font-size: 14px;
`;


let tbody = document.createElement("tbody");

nuevoArray.forEach(dato => {
    let fila = document.createElement("tr");

    let tdTitol = document.createElement("td");
    tdTitol.innerText = dato.titol;
    tdTitol.style.padding = "5px";
    tdTitol.style.textAlign = "left";

    let tdIdioma = document.createElement("td");
    tdIdioma.innerText = dato.idiomaOriginal;
    tdIdioma.style.padding = "5px";
    tdIdioma.style.textAlign = "left";

    let tdAccions = document.createElement("td");
    tdAccions.style.padding = "5px";

    let iconoEditar = document.createElement("i");
    iconoEditar.className = "fa-solid fa-pen-to-square";
    iconoEditar.innerText = " Editar";
    iconoEditar.style.cssText = "margin-right: 10px; cursor: pointer;";

    let iconoEliminar = document.createElement("i");
    iconoEliminar.className = "fa-solid fa-trash";
    iconoEliminar.innerText = " Eliminar";
    iconoEliminar.style.cssText = "cursor: pointer;";

    iconoEliminar.onclick = function(){
        if (confirm("Quieres eliminar esta partitura?") == true) {
            alert("Element esborrat");
        } else {
            alert("Has cancel·lat l'acció");
        }
    };


    tdAccions.appendChild(iconoEditar);
    tdAccions.appendChild(iconoEliminar);

    fila.appendChild(tdTitol);
    fila.appendChild(tdIdioma);
    fila.appendChild(tdAccions);

    tbody.appendChild(fila);
});

tabla.appendChild(tbody);


tablaContainer.appendChild(tabla);


document.body.appendChild(tablaContainer);


redirectToLogin.onclick = function () {
    let width = 600;
    let height = 600;
    let left = (window.innerWidth / 2) - (width / 2); 
    let top = (window.innerHeight / 2) - (height / 2);

    window.open("./login.html", "", `width=${width},height=${height},left=${left},top=${top}`);
};
