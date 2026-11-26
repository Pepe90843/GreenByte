// Muestra un mensaje breve después de una acción.
let temporizadorMensaje;

function mostrarMensaje(texto) {
  const mensaje = document.querySelector('#toast');

  if (!mensaje) {
    return;
  }

  mensaje.textContent = texto;
  mensaje.classList.add('is-visible');
  window.clearTimeout(temporizadorMensaje);

  temporizadorMensaje = window.setTimeout(function () {
    mensaje.classList.remove('is-visible');
  }, 2800);
}

// Comprueba el formulario de muestra sin enviar ni guardar los datos.
const formularioRegistro = document.querySelector('#registro-form');

if (formularioRegistro) {
  formularioRegistro.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const contrasena = document.querySelector('#contrasena').value;
    const confirmar = document.querySelector('#confirmar').value;
    const mensaje = document.querySelector('#registro-mensaje');

    if (contrasena !== confirmar) {
      mensaje.textContent = 'Las contraseñas no coinciden.';
    } else {
      mensaje.textContent = 'Formulario de ejemplo correcto. No se ha creado ninguna cuenta.';
      formularioRegistro.reset();
    }
  });
}

// Marca la tarjeta de perfil que se ha elegido.
const opcionesPerfil = document.querySelectorAll('.profile-option input');

opcionesPerfil.forEach(function (opcion) {
  opcion.addEventListener('change', function () {
    opcionesPerfil.forEach(function (otraOpcion) {
      otraOpcion.parentElement.classList.remove('is-selected');
    });

    opcion.parentElement.classList.add('is-selected');
  });
});

// Resalta las necesidades marcadas.
const opcionesNecesidad = document.querySelectorAll('.need-option input');

opcionesNecesidad.forEach(function (opcion) {
  opcion.addEventListener('change', function () {
    if (opcion.checked) {
      opcion.parentElement.classList.add('is-selected');
    } else {
      opcion.parentElement.classList.remove('is-selected');
    }
  });
});

// Añade un recordatorio de ejemplo en la pantalla de inicio.
const botonRecordatorio = document.querySelector('#add-reminder');

if (botonRecordatorio) {
  botonRecordatorio.addEventListener('click', function () {
    const listaAgenda = document.querySelector('#agenda-list');
    const recordatorio = document.createElement('article');

    recordatorio.classList.add('home-event');
    recordatorio.innerHTML =
      '<span class="event-date">HOY<br><strong>Nuevo</strong></span>' +
      '<span class="event-symbol">♡</span>' +
      '<div><h3>Un nuevo recordatorio</h3>' +
      '<p>Recuerda reservar un momento para ti</p></div>';

    listaAgenda.appendChild(recordatorio);
    mostrarMensaje('Recordatorio añadido a tu agenda.');
  });
}
