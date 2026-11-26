# CuidaMe — documentación del proyecto

## Qué es

CuidaMe es un prototipo de interfaz para una app de acompañamiento y organización de cuidados cotidianos. Está pensado para personas con movilidad reducida, familiares y profesionales de apoyo. Su propósito es presentar apoyos personales, una agenda amable y un espacio donde la persona pueda compartir su historia.

La experiencia recoge las pantallas de los bocetos incluidos en `img/`: bienvenida, guía, registro, selección de perfil, necesidades de ayuda, lista de apoyos, inicio, historia personal y recordatorios.

## Ejecutar

Abre `index.html` directamente en un navegador moderno o sirve la carpeta raíz con un servidor estático. No se requiere instalación, compilación ni dependencias externas. La página utiliza tipografías del sistema.

## Organización

| Ruta | Responsabilidad |
| --- | --- |
| `index.html` | Bienvenida y acceso a la app |
| `html/guia.html` | Explicación visual de la app |
| `html/registro.html` | Formulario de ejemplo sin alta real |
| `html/perfil.html` | Selección de persona usuaria |
| `html/necesidades.html` | Selección de necesidades |
| `html/apoyos.html` | Resumen informativo de apoyos |
| `html/inicio.html` | Inicio, accesos, agenda de muestra y emergencias |
| `html/historia.html` | Ejemplo de historia y logros personales |
| `css/style.css` | Paleta, componentes, breakpoints, estados y movimiento |
| `js/script.js` | Interacciones sencillas de formularios, selección y recordatorios |
| `img/` | Imágenes de referencia del producto |

## Diseño y accesibilidad

- Paleta cálida: fondo marfil, verde azulado y salvia, con acentos amarillo suave y coral.
- Diseño adaptable: navegación lateral en escritorio y barra inferior en pantallas pequeñas; tarjetas en una o dos columnas según el espacio.
- Controles nativos, etiquetas comprensibles, estados `aria-pressed`, foco visible, enlace para saltar al contenido y avisos anunciados con `aria-live`.
- Las animaciones son decorativas y se reducen cuando el sistema solicita `prefers-reduced-motion`.
- La interfaz evita depender únicamente del color para indicar el estado seleccionado.
- El código utiliza HTML, CSS y JavaScript sencillos, con funciones y eventos DOM fáciles de seguir; no necesita frameworks ni herramientas de compilación.

## Alcance actual

Las selecciones de perfil y necesidades solo se muestran en pantalla; el formulario de registro comprueba los datos, pero no crea una cuenta ni los envía. El botón de agenda agrega un recordatorio demostrativo mientras la página está abierta. No hay autenticación, persistencia, agenda conectada, chat, servicios de cuidado contratables ni backend. El teléfono 112 abre el marcador del dispositivo mediante `tel:112`; debe usarse solo ante una emergencia real.

## Comprobación manual

1. Abrir la página y recorrerla con teclado, comprobando el enlace «Saltar al contenido» y el foco visible.
2. Recorrer desde la bienvenida la guía, el registro de muestra, la selección de perfil, las necesidades y los apoyos.
3. Probar las validaciones del registro de muestra y seleccionar varias necesidades.
4. Añadir un recordatorio en el inicio y comprobar el anuncio accesible.
5. Comprobar las pantallas en escritorio, tablet y móvil; activar también `prefers-reduced-motion`.
