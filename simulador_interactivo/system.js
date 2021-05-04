        window.onload = function () {
            var localStorageKeyName = 'data';

            loadFromLocalStorage();

            document.querySelector("#btn-add").addEventListener('click', function () {
                var nombre = document.getElementById("nombre"),
                    apellido = document.getElementById("apellido"),
                    dia = document.getElementById("dia");
                    horario = document.getElementById("horario");
                    servicio = document.getElementById("servicio");

                // Validate
                if (nombre.value.length === 0 || apellido.value.length === 0 || dia.options[dia.selectedIndex].text == "Seleccione"
                    || horario.options[horario.selectedIndex].text == "Seleccione" || servicio.value.length === 0) return;

                var user = {
                    nombre: nombre.value,
                    apellido: apellido.value,
                    dia: dia.options[dia.selectedIndex].text,
                    horario: horario.options[horario.selectedIndex].text,
                    servicio: servicio.value
                };

                // Clean data
                nombre.value = '';
                apellido.value = '';
                dia.selectedItem = '';
                horario.selectedItem = '';
                servicio.value = '';

                // Append to my localStorage
                appendObjectToLocalStorage(user);
            })

            function appendObjectToLocalStorage(obj) {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                users.push(obj);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                loadFromLocalStorage();
            }

            function loadFromLocalStorage() {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    gridBody = document.querySelector("#grid tbody");

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                // Draw TR from TBODY
                gridBody.innerHTML = '';

                users.forEach(function (x, i) {
                    var tr = document.createElement("tr"),
                        tdNombre = document.createElement("td"),
                        tdApellido = document.createElement("td"),
                        tdDia = document.createElement("td"),
                        tdHorario = document.createElement("td"),
                        tdServicio = document.createElement("td"),
                        tdRemove = document.createElement("td"),
                        btnRemove = document.createElement("button");

                        tdNombre.innerHTML = x.nombre;
                        tdApellido.innerHTML = x.apellido;
                        tdDia.innerHTML = x.dia;
                        tdHorario.innerHTML = x.horario;
                        tdServicio.innerHTML = x.servicio;

                    btnRemove.textContent = 'Eliminar';
                    btnRemove.className = 'btn btn-xs btn-danger';
                    btnRemove.addEventListener('click', function(){
                        removeFromLocalStorage(i);
                    });

                    tdRemove.appendChild(btnRemove);

                    tr.appendChild(tdNombre);
                    tr.appendChild(tdApellido);
                    tr.appendChild(tdDia);
                    tr.appendChild(tdHorario);
                    tr.appendChild(tdServicio);
                    tr.appendChild(tdRemove);

                    gridBody.appendChild(tr);
                });
            }

            function removeFromLocalStorage(index){
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                users = JSON.parse(dataInLocalStorage);

                users.splice(index, 1);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                loadFromLocalStorage();
            }
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