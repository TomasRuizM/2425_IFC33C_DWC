document.body.style.cssText = 
`
    background-image: url('./assets/img/background/background11.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
`;


let titulo = document.createElement("h1");
titulo.innerText = "Score Finder";
titulo.style.textAlign = "center";
titulo.style.fontSize = "70px";
titulo.style.marginTop = "60px";
titulo.style.color = "#c51d1d";
document.body.appendChild(titulo);


let formularioContainer = document.createElement("div");
formularioContainer.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;


let formulario = document.createElement("form");
formulario.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    width: 300px;
`;


let labelCorreo = document.createElement("label");
labelCorreo.innerText = "Correo Electrónico";
let inputCorreo = document.createElement("input");
inputCorreo.style.padding = "10px";
inputCorreo.style.borderRadius = "5px";


let labelContrasena = document.createElement("label");
labelContrasena.innerText = "Contraseña";
let inputContrasena = document.createElement("input");
inputContrasena.style.padding = "10px";
inputContrasena.style.borderRadius = "5px";


let botonEntrar = document.createElement("button");
botonEntrar.innerText = "Entrar";
botonEntrar.type = "submit";
botonEntrar.style.cssText = `
    background-color: #c51d1d;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
`;



formulario.appendChild(labelCorreo);
formulario.appendChild(inputCorreo);
formulario.appendChild(labelContrasena);
formulario.appendChild(inputContrasena);
formulario.appendChild(botonEntrar);

formularioContainer.appendChild(formulario);

document.body.appendChild(formularioContainer);
