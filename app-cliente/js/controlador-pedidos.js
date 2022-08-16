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