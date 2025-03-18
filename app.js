// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let numeroDeAmigos


function agregarAmigo() {
    let agregarAmigo = document.querySelector('#amigo').value;
    console.log(agregarAmigo);
    if (agregarAmigo === '') {
        alert ('Por favor agrega el nombre de un amigo');
        return agregarAmigo();
    } if (amigos.includes(agregarAmigo)) {
        alert ('Ese amigo ya fue agregado');
        limpiarCaja();
        return agregarAmigo();
        }
        amigos.push(agregarAmigo);
        console.log (amigos);
        agregarNombreALista('#listaAmigos', `${amigos}`)
    limpiarCaja();
}


function agregarNombreALista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}


function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random()*amigos.length)
    let nombreAmigo = amigos[amigoSorteado]
    document.getElementById('resultado').innerHTML = `Parece que esta vez ${nombreAmigo} es tu amigo secreto`;
   
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
