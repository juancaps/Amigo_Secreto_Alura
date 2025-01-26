
let amigos = [];


function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);

    
    actualizarLista();


    input.value = "";
    input.focus();
}


function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre para realizar el sorteo.");
        return;
    }


    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos[indiceAleatorio];


    mostrarResultado(amigoElegido);
}


function mostrarResultado(amigoElegido) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoElegido}`;
    resultado.appendChild(li);
}
