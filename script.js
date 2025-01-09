let galeria_gatos = [
    {nome:"Abissínio", img:"./img/abissínio.jpg"},
    {nome:"Angorá", img:"./img/angorá.jpg"},
    {nome:"Bombaim", img:"./img/bombaim.jpg"},
    {nome:"Gato de Bengala", img:"./img/gato_bengala.jpg"},
    {nome:"Gato Persa", img:"./img/gato_persa.jpg"},
    {nome:"Mainecoon", img:"./img/mainecoon.jpg"},
    {nome:"Oriental Shorthair", img:"./img/oriental_shorthair.jpg"},
    {nome:"Ragdoll", img:"./img/ragdoll.jpg"},
    {nome:"Siamês", img:"./img/siamês.jpg"},
    {nome:"Sphynx", img:"./img/sphynx.jpg"}
]

let gatos = document.getElementById("gatos");

for( let gato of galeria_gatos ){

    gatos.innerHTML += `<figure> <img src="${gato.img}"> <figcaption>${gato.nome}</figcaption> </figure>`
}

let procura = document.getElementById("form-control me-2")

function renderGaleria(filtrados) {
    gatos.innerHTML = ""; 
    for (let gato of filtrados) {
        gatos.innerHTML += `
            <figure class = cards>
                <img src="${gato.img}" alt="${gato.nome}">
                <figcaption>${gato.nome}</figcaption>
            </figure>
        `;
    }
}

renderGaleria(galeria_gatos);

procura.addEventListener("input", function() {
    let termo = procura.value.toLowerCase(); 
    let filtrados = galeria_gatos.filter(gato =>
        gato.nome.toLowerCase().includes(termo)
    );
    if(filtrados.length === 0){
        gatos.innerHTML = "<p>Nenhuma foto encontrada!</p>"
    } else{
        renderGaleria(filtrados);
    }
    
});