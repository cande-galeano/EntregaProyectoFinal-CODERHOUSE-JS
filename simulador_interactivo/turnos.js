class Servicio {
    constructor (nombreServicio, precio){
        this.nombreServicio = nombreServicio;
        this.precio = precio;
    }
}

class Turno {
    constructor (dia, horarios){
        this.dia = dia;
        this.horarios = horarios;
    }

}


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
    span.innerHTML = "Usuario:  " + nombre + " " + apellido ;
    span.style.setProperty('font-size', '15px');
    span.style.setProperty('color', '#E43813');
    span.style.setProperty('font-weight', '600');
}
let Salir = document.getElementById("salir");
Salir.addEventListener("click", myFunction2);
function myFunction2(e)  {
    e.preventDefault();
    let obj = JSON.parse(localStorage.getItem('logueado'));
    let mail = obj['mail'];
    let contrasena = obj['contrasena'];
    console.log(mail);
    localStorage.removeItem('logueado');
    location.href="login.html";
}

var localStorageKeyName = 'data';
let Boton = document.getElementById("aceptar");
Boton.addEventListener("click", myFunction);
function myFunction(e)  {
    e.preventDefault();
    let ArrayServicios = [];
    let corte1 = new Servicio("corte", 500);
    let barba1 = new Servicio("barba", 200);
    let color1 = new Servicio("color", 400);
    let afeitado1 = new Servicio ("afeitado", 250);
    let presupuesto = 0;
    let corte = document.getElementById('corte').checked; 
    let color = document.getElementById('color').checked; 
    let barba = document.getElementById('barba').checked;
    let afeitado = document.getElementById('afeitado').checked;
    if(corte == true)
    {
        presupuesto += corte1.precio;
        ArrayServicios.push(corte1.nombreServicio);
    }
    if(color)
    {
        presupuesto += color1.precio;
        ArrayServicios.push(color1.nombreServicio);
    }
    if(barba)
    {
        presupuesto += barba1.precio;
        ArrayServicios.push(barba1.nombreServicio);
    }
    if(afeitado)
    {
        presupuesto += afeitado1.precio;
        ArrayServicios.push(afeitado1.nombreServicio);
    }
    
    let dia = document.getElementById("dia");
    let diaSeleccionado = dia.options[dia.selectedIndex].text;
    let horario = document.getElementById("horario");
    let horarioSeleccionado = horario.options[horario.selectedIndex].text;
    console.log(diaSeleccionado);
    console.log(presupuesto);
    console.log(horarioSeleccionado);

    if(diaSeleccionado != "Seleccione una opción" && horarioSeleccionado != "Seleccione una opción" && presupuesto != 0)
    {
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
    let contenedor = document.getElementById("span2");
    contenedor.innerHTML = nombre + " "+ apellido +" su presupuesto es de $: " + presupuesto + ", siendo sus servicios: " + ArrayServicios.join(' / ') +  ". Usted tiene el turno asignado para el día: " + diaSeleccionado + " en el rango horario de " + horarioSeleccionado;
    contenedor.style.setProperty('text-align', 'center');
    contenedor.style.setProperty('padding-bottom', '1em');
    var user = {
        nombre: nombre,
        apellido: apellido,
        dia: diaSeleccionado,
        horario: horarioSeleccionado,
        servicio: ArrayServicios.join(' / ')
    };
    appendObjectToLocalStorage(user);
    Boton.disabled = true;
}
    }
    else
    {
    let contenedor = document.getElementById("span2");
    contenedor.innerHTML = "Debe completar todos los campos.";
    contenedor.style.setProperty('text-align', 'center');
    contenedor.style.setProperty('padding-bottom', '1em');
    }

};

function appendObjectToLocalStorage(obj) {
    var users = [],
        dataInLocalStorage = localStorage.getItem(localStorageKeyName);

    if (dataInLocalStorage !== null) {
        users = JSON.parse(dataInLocalStorage);
    }

    users.push(obj);

    localStorage.setItem(localStorageKeyName, JSON.stringify(users));
}