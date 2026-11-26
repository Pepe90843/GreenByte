// Muestra mensajes breves cuando se realiza una accion.
let temporizadorMensaje;

function mostrarMensaje(texto) {
  const mensaje = document.querySelector('#toast');

  mensaje.textContent = texto;
  mensaje.classList.add('is-visible');
  window.clearTimeout(temporizadorMensaje);

  temporizadorMensaje = window.setTimeout(function () {
    mensaje.classList.remove('is-visible');
  }, 2800);
}

// Al pulsar una tarjeta, se anade o se quita de la lista de apoyos.
const tarjetasApoyo = document.querySelectorAll('.care-card');

tarjetasApoyo.forEach(function (tarjeta) {
  tarjeta.addEventListener('click', function () {
    const estaSeleccionada = tarjeta.getAttribute('aria-pressed') === 'true';
    const nuevaSeleccion = !estaSeleccionada;
    const textoAccion = tarjeta.querySelector('.care-card-action');

    tarjeta.setAttribute('aria-pressed', nuevaSeleccion);

    if (nuevaSeleccion) {
      textoAccion.firstChild.textContent = 'Añadido a mis apoyos ';
      mostrarMensaje(tarjeta.dataset.care + ' añadido a tus apoyos.');
    } else {
      textoAccion.firstChild.textContent = 'Añadir a mis apoyos ';
      mostrarMensaje(tarjeta.dataset.care + ' eliminado de tus apoyos.');
    }
  });
});

// El selector de perfil cambia el texto y el boton marcado.
const opcionesPerfil = document.querySelectorAll('.role-option');

opcionesPerfil.forEach(function (opcion) {
  opcion.addEventListener('click', function () {
    opcionesPerfil.forEach(function (otraOpcion) {
      otraOpcion.classList.remove('is-selected');
      otraOpcion.setAttribute('aria-pressed', 'false');
    });

    opcion.classList.add('is-selected');
    opcion.setAttribute('aria-pressed', 'true');
    document.querySelector('#role-summary').textContent = opcion.dataset.role;
    mostrarMensaje('Experiencia personalizada: ' + opcion.dataset.role.toLowerCase() + '.');
  });
});

// Anade un recordatorio de ejemplo a la agenda.
const botonRecordatorio = document.querySelector('#add-reminder');

botonRecordatorio.addEventListener('click', function () {
  const listaAgenda = document.querySelector('#agenda-list');
  const nuevoRecordatorio = document.createElement('article');

  nuevoRecordatorio.classList.add('agenda-item');
  nuevoRecordatorio.innerHTML =
    '<span class="agenda-time">Nuevo</span>' +
    '<span class="agenda-marker marker-teal" aria-hidden="true">＋</span>' +
    '<div class="agenda-copy"><strong>Tu nuevo recordatorio</strong>' +
    '<small>Recuerda reservar un momento para ti</small></div>' +
    '<span class="agenda-status">Personal</span>';

  listaAgenda.appendChild(nuevoRecordatorio);
  mostrarMensaje('Recordatorio añadido a tu agenda.');
});

// Mantiene marcada la opcion de navegacion que se ha pulsado.
const enlacesNavegacion = document.querySelectorAll('.nav-link, .mobile-nav-link');

enlacesNavegacion.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    enlacesNavegacion.forEach(function (otroEnlace) {
      otroEnlace.classList.remove('is-active');
      otroEnlace.removeAttribute('aria-current');
    });

    const enlacesDestino = document.querySelectorAll(
      '.nav-link[href="' + enlace.getAttribute('href') + '"], ' +
      '.mobile-nav-link[href="' + enlace.getAttribute('href') + '"]'
    );

    enlacesDestino.forEach(function (enlaceDestino) {
      enlaceDestino.classList.add('is-active');
      enlaceDestino.setAttribute('aria-current', 'page');
    });
  });
});
