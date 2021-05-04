// INICIO SESIÓN
class Inicio {
    constructor (mail,contrasena) {
        this.mail = mail;
        this.contrasena = contrasena;
        
    }
  }
  
  let Mail = document.getElementById("EMAIL");
  let Contrasena = document.getElementById("CONTRASENA");
  
  let Boton = document.getElementById("btnInicio");
  Boton.addEventListener("submit", myFunction);
  Boton.addEventListener("click", myFunction);
  
    function myFunction(e)  {
        e.preventDefault();
        let obj = JSON.parse(localStorage.getItem('user')) || [] ;
            let inicio = new Inicio (Mail.value, Contrasena.value);
            let confirm1 = false;
            let confirm2 = false;

            for(let i = 0; i < obj.length; i++){
                if( obj[i].mail == inicio.mail){
                confirm1 = true;
                }
            }  
            for(let i = 0; i < obj.length; i++){
                if( obj[i].contrasena == inicio.contrasena){
                confirm2 = true;
                }
            }  
            if (inicio.mail != "" && inicio.contrasena != ""){
                if(confirm1 == true && confirm2 == true)
                {
                    if(inicio.mail == "system@system.com" && inicio.contrasena == "system")
                    {
                        location.href="system.html";
                        let clienteJson = JSON.stringify(inicio);
                        localStorage.setItem('logueado', clienteJson);
                    }
                    else
                    {
                        location.href="home.html";
                        let clienteJson = JSON.stringify(inicio);
                        localStorage.setItem('logueado', clienteJson);
                    }

                }
                else
                {
                    let contenedor = document.getElementById("span");
                    contenedor.innerHTML = "Usuario o contraseña incorrectos.";
                    contenedor.style.setProperty('text-align', 'center');
                    contenedor.style.setProperty('padding', '0.5em');
                }
                  
            }
            else{
                let contenedor = document.getElementById("span");
                contenedor.innerHTML = "Campos sin completar.";
                contenedor.style.setProperty('text-align', 'center');
                contenedor.style.setProperty('padding', '0.5em');
            }
    };