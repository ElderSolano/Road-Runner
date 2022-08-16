//Restaurantes

var nvosrestaurantes=[{
    nombreRestaurante: 'Burguer King',
    imagen: 'img/icons/BK.png',
    
},
{
    nombreRestaurante: 'Campero',
    imagen: '../img/icons/Campero.png',
},
{
    nombreRestaurante: 'Chilis',
    imagen: '../img/icons/Chilis.png',
},
{
    nombreRestaurante: 'Churchs Chiken',
    imagen: '../img/icons/Church_s_Chiken.png',
},
{
    nombreRestaurante: 'Popeyes',
    imagen: '../img/icons/Popeyes.png',
},
{
    nombreRestaurante: 'MacDonalds',
    imagen: '../img/icons/MacDonalds.png',
},
{
    nombreRestaurante: 'LittleCaesars',
    imagen: '../img/icons/LittleCaesars.png',
},
{
    nombreRestaurante: 'Dunkin Donuts',
    imagen: '../img/icons/Dunkin Donuts.png'
},
{
    nombreRestaurante: 'KFC',
    imagen: '../img/icons/KFC.png',
}];
var banners=[
{
    imagen:'../img/banner/1.png'
},
{
    imagen:'../img/banner/2.png'
},
{
    imagen:'../img/banner/3.jpg'
},
{
    imagen:'../img/banner/4.jpg'
},
{
    imagen:'../img/banner/5.jpg'
},
{
    imagen:'../img/banner/6.jpg'
},
{
    imagen:'../img/banner/7.jpg'
},
{
    imagen:'../img/banner/8.jpg'
},
{
    imagen:'../img/banner/9.jpg'
},
];
var combos=[
    {
        nombreCombo:'Combo1',
        descripcion:'diam sit amet nisl suscipit adipiscing bibendum est ultricies integer',
        precio:'L 300'
    },
    {
        nombreCombo:'Combo2',
        descripcion:'diam sit amet nisl suscipit adipiscing bibendum est ultricies integer',
        precio:'L 600'
    },
    {
        nombreCombo:'Combo3',
        descripcion:'diam sit amet nisl suscipit adipiscing bibendum est ultricies integer',
        precio:'L 500'
    }
];
var localStorage = window.localStorage;
var indiceResSeleccionado = null;
if (localStorage.getItem('nvosrestaurantes') == null) {
    localStorage.setItem('nvosrestaurantes', JSON.stringify(nvosrestaurantes));
} else {//de lo contrario, lo llena
    nvosrestaurantes = JSON.parse(localStorage.getItem('nvosrestaurantes'));
}
function generarRestaurantes() {
    nvosrestaurantes.forEach(function (res, i) {
        document.getElementById('restaurantes').innerHTML +=
            `<div class="col-3  col-sm-3 res">
                <div onclick="verRestaurante(${i})">
                <img src="${res.imagen}" class="imagen"  >
            </div>
        </div>`;
    });
}
generarRestaurantes();

function verRestaurante(indice) {
    console.log('Ver', indice);
    indiceResSeleccionado = indice;
    $('#modalverRestaurante').modal('show');
    let rest = nvosrestaurantes[indice];
    let ban= banners[indice];
    ;
    /*let combitos= '';
    
    for (let i = 0; i < combos.length; i++) {
        combitos+=JSON.stringify(combos[i]);
    } */

    document.getElementById('verRestaurante').innerHTML =
    `<div class="card" style="width: 18rem;">
    <img src="${ban.imagen}" class="" alt="${rest.nombreRestaurante}">
        
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${combos[0].nombreCombo} <br> ${combos[0].descripcion} <br> ${combos[0].precio} <br> <button class="btn btn-outline-success" ><i class="fa-solid fa-cart-plus"></i></button></li>
                <li class="list-group-item">${combos[1].nombreCombo} <br> ${combos[1].descripcion} <br> ${combos[1].precio} <br> <button class="btn btn-outline-success" ><i class="fa-solid fa-cart-plus"></i></button></li>
                <li class="list-group-item">${combos[2].nombreCombo} <br> ${combos[2].descripcion} <br> ${combos[2].precio} <br> <button class="btn btn-outline-success" ><i class="fa-solid fa-cart-plus"></i></button></li>
            </ul>
    </div>`;
}

function agregar(indice){

}

const labels = document.querySelectorAll(".form-control label");
labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map(
            (letter, idx) =>
                `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
});



/*
//Validaciones
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if (usuario.length == 0) {
        alert('El nombre de usuario no existe');
        return;
    }
    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
        alert('La clave no es válida');
        return;
    }
    this.submit();
}*/


//Menu desplegable

//Ejecutar la funcion
document.getElementById("btn").addEventListener("click", open_close_menu);

//Declaracion de variables
var side_menu = document.getElementById("menu-side");
var btn = document.getElementById("btn");
//Evento para mostrar y ocultar el menu
function open_close_menu() {
    side_menu.classList.toggle("menu-side-move");
}