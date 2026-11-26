# CuidaMe — documentación del proyecto

## Qué es

CuidaMe es un prototipo de interfaz para una app de acompañamiento y organización de cuidados cotidianos. Está pensado para personas con movilidad reducida, familiares y profesionales de apoyo. Su propósito es presentar apoyos personales, una agenda amable y un espacio donde la persona pueda compartir su historia.

La experiencia recoge ideas de los bocetos de `Bocetos_con_IA/`: bienvenida, red de apoyo, transporte adaptado, alimentación, ayuda personal y del hogar, historia personal y recordatorios.

## Ejecutar

Abre `index.html` directamente en un navegador moderno o sirve la carpeta raíz con un servidor estático. No se requiere instalación, compilación ni dependencias externas. La página utiliza tipografías del sistema.

## Organización

| Ruta | Responsabilidad |
| --- | --- |
| `index.html` | Estructura semántica, texto e interacciones accesibles |
| `css/style.css` | Paleta, componentes, breakpoints, estados y movimiento |
| `js/script.js` | Selección de apoyos, personalización, agenda y navegación activa |
| `Bocetos_con_IA/` | Referencias visuales del producto |

## Diseño y accesibilidad

- Paleta cálida: fondo marfil, verde azulado y salvia, con acentos amarillo suave y coral.
- Diseño adaptable: navegación lateral en escritorio y barra inferior en pantallas pequeñas; tarjetas en una o dos columnas según el espacio.
- Controles nativos, etiquetas comprensibles, estados `aria-pressed`, foco visible, enlace para saltar al contenido y avisos anunciados con `aria-live`.
- Las animaciones son decorativas y se reducen cuando el sistema solicita `prefers-reduced-motion`.
- La interfaz evita depender únicamente del color para indicar el estado seleccionado.
- El código utiliza HTML, CSS y JavaScript sencillos, con funciones y eventos DOM fáciles de seguir; no necesita frameworks ni herramientas de compilación.

## Alcance actual

Las selecciones de apoyos y el selector de perfil actualizan la interfaz durante la sesión; el perfil resume la elección actual. El botón de agenda agrega un recordatorio demostrativo. No hay autenticación, persistencia, agenda conectada, chat, servicios de cuidado contratables ni backend. El teléfono 112 abre el marcador del dispositivo mediante `tel:112`; debe usarse solo ante una emergencia real.

## Comprobación manual

1. Abrir la página y recorrerla con teclado, comprobando el enlace «Saltar al contenido» y el foco visible.
2. Seleccionar y deseleccionar una tarjeta de apoyo y cambiar la opción de perfil.
3. Añadir un recordatorio y confirmar el anuncio accesible.
4. Comprobar navegación y desbordamientos a 1440 px, 768 px y 375 px de ancho.
5. Activar la preferencia del sistema para reducir movimiento y confirmar que las animaciones se atenúan.
