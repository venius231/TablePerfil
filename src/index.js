import { saludar } from './js/componentes';

import './style.css';

/* Referentes html */

let agregando = document.querySelector("#agregando");
let table = document.querySelector("#table");
let perfilAgregar = document.querySelector("#rowAgregar");

/* array -INFO table- */
let todos = [];


/* function agregar HTML(TABLE)*/
function agregar() {

    table.innerHTML = "";

    if (todos.length > 0) {
        table.innerHTML = `
        <tr class="table-header" id="tableHeader">
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Identificación</th>
                        <th scope="col">Email</th>
                        <th scope="col">Direction</th>
                        <th scope="col">Teléfono</th>



                    </tr>
                    `;
        for (let i = 1; i <= todos.length; i++) {
            if (i % 2 != 0) {
                //console.log(todos, "row1");
                table.innerHTML += `
                <tr class="table-row" data-id="${i-1}">
                <th scope="row">${i}</th>
                <td>${todos[i-1].name}</td>
                <td>${todos[i-1].last}</td>
                <td>${todos[i-1].ids}</td>
                <td class="overflow-auto">${todos[i-1].emails}</td>
                <td class="overflow-auto">${todos[i-1].direc}</td>
                <td>${todos[i-1].tel}</td>


            </tr>`
            } else if (i % 2 == 0) {
                //console.log(todos, "row2");
                table.innerHTML += `
                <tr class="table-row-2" data-id="${i-1}">
                <th scope="row">${i}</th>
                <td>${todos[i-1].name}</td>
                <td>${todos[i-1].last}</td>
                <td>${todos[i-1].ids}</td>
                <td class="overflow-auto">${todos[i-1].emails}</td>
                <td class="overflow-auto">${todos[i-1].direc}</td>
                <td>${todos[i-1].tel}</td>

            </tr>`
            }
        }

    }


}

let unaVez = 1;
/* INFO Perfil*/
perfilAgregar.addEventListener('click', (event) => {
    let mirando = event.target.localName;
    let todoElemento = event.target.parentElement;
    let todoId = todoElemento.getAttribute('data-id');


    if (unaVez === 1 && mirando == "td") {
        perfilAgregar.innerHTML += `
        <div class="col-md-4 offset-md-1 col-10  perfil" id="perfil">
            <div class="row justify-content-center">
                <img src="./assets/ballimg.png" alt="">
                <button type="button" class="cerrar" >
                    <span aria-hidden="true" id="cerrar">&times;</span>
                </button>
            </div>
            <div class="row justify-content-center">
                <h3 class="col-12 text-center">${todos[todoId].name} <span>${todos[todoId].last}</span></h3>
                <h4 class="col-12 text-center">${todos[todoId].ids}</h4>

            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <p class="enviar" id="email">${todos[todoId].emails}</p>
                    <p class="enviar direc" id="direc">${todos[todoId].direc}</p>

                </div>
            </div>
            
        </div>
        `
        unaVez = 2;


    }
    if (unaVez === 2) {
        let cerrar = document.querySelector("#cerrar");
        let perfil = document.querySelector("#perfil");
        cerrar.addEventListener("click", () => {
            perfil.remove();
            unaVez = 1;
        });

    }

});

/* EVENTO  recibir info*/
agregando.addEventListener('click', () => {
    let nombre = document.querySelector("#name");
    let apellido = document.querySelector("#lastname");
    let id = document.querySelector("#identificacion");
    let email = document.querySelector("#email");
    let direccion = document.querySelector("#direccion");
    let tel = document.querySelector("#tel");

    if (nombre.value && apellido.value && id.value && email.value && direccion.value && tel.value) {
        let nuevo = new Object();
        nuevo.name = nombre.value;
        nuevo.last = apellido.value;
        nuevo.ids = id.value;
        nuevo.emails = email.value;
        nuevo.direc = direccion.value;
        nuevo.tel = tel.value;

        //console.log(nombre.value, apellido.value, id.value, email.value, direccion.value, tel.value);

        todos.push(nuevo);
        agregar();

        //console.log(todos, nuevo);

        nombre.value = "";
        apellido.value = "";
        id.value = "";
        email.value = "";
        direccion.value = "";
        tel.value = "";



    } else {
        window.alert("Necesitas completar todos los campos");
    }

});