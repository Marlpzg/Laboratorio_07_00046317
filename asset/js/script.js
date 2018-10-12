let container = document.getElementById("c1");

container.innerText = "¡Hola Mundo!";
container.style.backgroundColor = "#000000";
container.style.color = "#1cb723";
container.style.width = container.style.height = "200px";
container.innerHTML = '<input type="text" placeholder="Escriba su texto">';

let containers = document.getElementsByClassName("c2");

for(let e of containers){
    e.style.backgroundColor = "#009999";
    e.innerHTML = '<input type="text" placeholder="Escriba su texto">';
}

let boton = document.getElementById("btn-click");
boton.addEventListener('click', (evt) => {
    alert("Hola mundo");
});

let btnCopy = document.getElementById("btnCopy");
btnCopy.addEventListener('click', (evt) => {
    let msj = document.getElementById("textMsj").value;
    document.getElementById('showMsj').innerText = msj;
});