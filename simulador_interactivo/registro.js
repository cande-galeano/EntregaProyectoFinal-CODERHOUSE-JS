class Cliente {
    constructor (nombre,apellido,telefono,mail,contrasena) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.mail = mail;
        this.contrasena = contrasena;
        
    }
  }
      let Nombre = document.getElementById("NOMBRE");
      let Apellido = document.getElementById("APELLIDO");
      let Telefono = document.getElementById("TELEFONO");
      let Mail = document.getElementById("EMAIL");
      let Contrasena = document.getElementById("CONTRASENA");
      var Clientes = [];

      $(function() {

        $("form[name='registration']").validate(
          {
          rules: {
            NOMBRE: "required",
            APELLIDO: "required",
            TELEFONO: {
              required: true,
              number: true,
              minlength: 8
            },
            EMAIL: {
              required: true,
              email: true
            },
            CONTRASENA: {
              required: true,
              minlength: 5
            }
          },
          messages: {
            NOMBRE: "Por favor, introduzca su nombre",
            APELLIDO: "Por favor, introduzca su apellido",
            TELEFONO: {
              required: "Por favor, introduzca su número de teléfono",
              minlength: "Su número telefónico debe tener al menos 8 caracteres"
            },
            CONTRASENA: {
              required: "Por favor proporcione una contraseña",
              minlength: "Su contraseña debe tener al menos 5 caracteres"
            },
            EMAIL: "Por favor, introduce una dirección de correo electrónico válida"
          },
          submitHandler: function(form) {
            event.preventDefault();
            let obj = JSON.parse(localStorage.getItem('user')) || [] ;
            let cliente = new Cliente (Nombre.value, Apellido.value, Telefono.value, Mail.value, Contrasena.value);
            let confirm1 = false;
            for(let i = 0; i < obj.length; i++){
              if( obj[i].mail == cliente.mail){
              confirm1 = true;
              }
          }   
            if(confirm1 != true)
           {
              obj.push(cliente);
              let clienteJson = JSON.stringify(obj);
              localStorage.setItem('user', clienteJson);
              location.href="login.html";
           }
           if (confirm1 == true)
           {
            let span = document.getElementById("span");
            span.innerHTML = "Ya existe un usuario con ese correo."; 
           }        
           }
        });
      });
 



