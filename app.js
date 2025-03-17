// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


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
        amigos.forEach(agregarAmigo => {
            console.log(agregarAmigo);
        })
       // agregarNombreALista('#listaAmigos', `${amigos}`) //esta linea está ligada a la funcion en agregarNombreALista

        limpiarCaja();
}

/*function agregarNombreALista(elemento,nombre) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = nombre;
}*/

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//listaAmigos //nombre del id de la lista en html


//AQUI ESTOY PROBANDO OTRA FUNCION PARA AGREGAR A UNA LISTA
/*function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
} */
