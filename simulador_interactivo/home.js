let obj = JSON.parse(localStorage.getItem('logueado'));
let mail = obj['mail'];
let obj2 = JSON.parse(localStorage.getItem('user')) || [] ;
let nombre;
let apellido;
for(let i = 0; i < obj2.length; i++){
    if(obj2[i].mail == mail){
    nombre=obj2[i].nombre;
    apellido=obj2[i].apellido;
    }
}  
if(nombre != undefined && apellido != undefined)
{
    let span = document.getElementById("span");
    span.innerHTML += nombre + " " + apellido ;
    span.style.setProperty('font-size', '15px');
    span.style.setProperty('color', '#E43813');
    span.style.setProperty('font-weight', '600');
}
let Boton = document.getElementById("salir");
Boton.addEventListener("click", myFunction);
function myFunction(e)  {
    e.preventDefault();
    let obj = JSON.parse(localStorage.getItem('logueado'));
    let mail = obj['mail'];
    let contrasena = obj['contrasena'];
    console.log(mail);
    localStorage.removeItem('logueado');
    location.href="login.html";
}
