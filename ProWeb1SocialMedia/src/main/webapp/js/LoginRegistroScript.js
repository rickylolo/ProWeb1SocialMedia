/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      formulario = document.querySelector('.formulario'),
      $signIn  = document.querySelector('.sign-in');

const nombre = document.getElementById('name');
const apellidos = document.getElementById('apellido');
const fecha = document.getElementById('fecha');
const email = document.getElementById('email');
const imagen = document.getElementById('imagen');
const usuario = document.getElementById('usuario');
const contra = document.getElementById('contra');
const contra2 = document.getElementById('contra2');
const listInputs = document.querySelectorAll(".form-input");

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

formulario.addEventListener('submit', e => {

    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
      });

    e.preventDefault();
    let emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const letras = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
    var checkC=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

    if(!letras.test(nombre.value) || nombre.value.trim() == ""){
        let elemento = document.querySelector(".nameD");
        elemento.lastElementChild.innerHTML = "El nombre ingresado es incorrecto. Inténtelo de nuevo";
        return false;
    }

    if(!letras.test(apellidos.value) || apellidos.value.trim() == ""){
        let elemento = document.querySelector(".apellidoD");
        elemento.lastElementChild.innerHTML = "El apellido ingresado es incorrecto. Inténtelo de nuevo";
        return false;
    }

    if(fecha.value.trim() == ""){
        let elemento = document.querySelector(".fechaD");
        elemento.lastElementChild.innerHTML = "Falta ingresar una fecha de nacimiento";
        return false;
    }
    var edad = calcularEdad(fecha.value);
    if(edad < 13){
        let elemento = document.querySelector(".fechaD");
        elemento.lastElementChild.innerHTML = "El usuario debe ser mayor de 13 años";
        return false;
    }

    if(!emailR.test(email.value)){
        let elemento = document.querySelector(".emailD");
        elemento.lastElementChild.innerHTML = "El formato del correo no es valido. Inténtelo de nuevo";
        return false;
    }
    
    if(imagen.value.trim() == ""){
        let elemento = document.querySelector(".imagenD");
        elemento.lastElementChild.innerHTML = "Falta ingresar una imagen";
        return false;
    }

    if(usuario.value.trim() == ""){
        let elemento = document.querySelector(".usuarioD");
        elemento.lastElementChild.innerHTML = "Falta ingresar nombre de usuario";
        return false;
    }

    if(!contra.value.match(checkC)){
        let elemento = document.querySelector(".contraD");
        elemento.lastElementChild.innerHTML = "La contraseña que ingresó no cumple con las especificaciones";
        return false;
    }

    if (contra2.value != contra.value || contra2.value.trim() == "") {
        let elemento = document.querySelector(".contra2D");
        elemento.lastElementChild.innerHTML = "La contraseña no coincide. Inténtelo de nuevo";
        return false;
       
      }
});


function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}


