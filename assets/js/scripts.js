document.getElementById("btn_registrarse").addEventListener("click", register);
document.getElementById("btn_iniciarsesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize",anchoPagina);

//Declaración de variables

var contenedor_login_register = document.querySelector(".contenedorloginregister")
var formulario_login = document.querySelector(".formulario_login")
var formulario_register = document.querySelector(".formulario_register")
var cajatrasera_login = document.querySelector(".cajatrasera_login")
var cajatrasera_register = document.querySelector(".cajatrasera_register")

function anchoPagina(){
    if(window.innerWidth > 850){
        cajatrasera_login.style.display = "block";
        cajatrasera_register.style.displayc="block";
    }else{
        cajatrasera_register.style.display = "block";
        cajatrasera_register.style.opacity ="1";
        cajatrasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function register(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left ="410px"
        formulario_login.style.display = "none";
        cajatrasera_register.style.opacity = "0";
        cajatrasera_login.style.opacity = "1"; 
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left ="0px"
        formulario_login.style.display = "none";
        cajatrasera_register.style.display = "none";
        cajatrasera_login.style.display = "block";
        cajatrasera_login.style.opacity ="1";
    }
}

function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left ="10px"
        formulario_login.style.display = "block";
        cajatrasera_register.style.opacity = "1";
        cajatrasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left ="0px"
        formulario_login.style.display = "block";
        cajatrasera_register.style.display = "block";
        cajatrasera_login.style.display = "none";
    }
}

function validarCorreo(correo){
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    if(esValido == true){
        alert("El correo electrónico es válido");
    }else{
        alert("El correo electrónico es inválido");
    } 
}