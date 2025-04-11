console.log("Hola desde javascript");
//alert("mensaje");
//prompt("ingresa tu nombre")

const boton = document.getElementById("button");
const username = document.getElementById("user");
const password = document.getElementById("password");

const login = () => {
    //validar credenciales
    console.log("attempted to login")
    console.log(username.value + " " + password.value);
    //once validated, se lleva a profile
    sessionStorage.name = "Mauricio Gutierrez";
    window.location = "../pages/profile.html";
    
};


boton.addEventListener("click", login);