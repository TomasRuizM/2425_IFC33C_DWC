// Definición de partituras
var partituras = [
    {
        nom: "La Balanguera",
        notas: ["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"]
    },
    {
        nom: "Happy Birthday",
        notas: ["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"]
    }
];


function Nota (name, type) {
    this.name = name;
    this.type = type;
}


var cerca = [];


function addCerca(nota) {
    cerca.push(nota);
}


var nota1 = new Nota("DO", "#");
var nota2 = new Nota("RE", "");
var nota3 = new Nota("DO", "");
addCerca(nota1);
addCerca(nota2);
addCerca(nota3);

console.log("Búsqueda (cerca):", cerca);


function cercador(cerca, partituras) {

    var notasCerca = cerca.map(nota => nota.name);

    console.log("Buscando la secuencia:", notasCerca);


    for (let i = 0; i < partituras.length; i++) {
        let cancion = partituras[i];
        let notasCancion = cancion.notas;
        

        if (buscarSubsecuencia(notasCerca, notasCancion)) {
            console.log("Coincidencia encontrada en:", cancion.nom);
        }
    }
}


function buscarSubsecuencia(notasCerca, notasCancion) {
    let cercaLength = notasCerca.length;
    let cancionLength = notasCancion.length;


    for (let i = 0; i <= cancionLength - cercaLength; i++) {
        let subsecuencia = notasCancion.slice(i, i + cercaLength);

        if (JSON.stringify(subsecuencia) === JSON.stringify(notasCerca)) {
            return true;
        }
    }
    return false;
}


cercador(cerca, partituras);
