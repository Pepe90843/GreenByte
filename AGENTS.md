# Contexto para agentes

## Producto

Este repositorio contiene CuidaMe, un prototipo web de apoyo cotidiano para personas con movilidad reducida, familiares y profesionales. La referencia de producto y estética está en `img/`. El tono debe ser cálido, respetuoso, claro y centrado en la autonomía de la persona.

## Pautas de interfaz

- Conserva la paleta marfil, verde azulado/salvia, amarillo suave y coral de los bocetos.
- Mantén la experiencia responsive: navegación lateral en escritorio y navegación inferior en móvil; evita desbordamientos en tablet y móvil.
- Prioriza HTML semántico, controles nativos, contraste legible, foco visible, mensajes claros y soporte de `prefers-reduced-motion`.
- No presentes como reales servicios que aún no existen. La autenticación, las cuentas, los datos persistentes, el chat y las contrataciones requieren backend y están fuera del prototipo actual.
- El enlace `tel:112` está reservado para emergencias reales; no lo conviertas en una acción simulada ni lo presentes como chat de ayuda.

## Estructura y ejecución

- `index.html`: bienvenida.
- `html/`: guía, registro de muestra, selección de perfil/necesidades, apoyos, inicio e historia.
- `css/style.css`: estilos y breakpoints.
- `js/script.js`: interacciones del lado del cliente.
- `docs/README.md`: documentación funcional y validación manual.
- No hay framework ni paso de compilación. Se puede abrir `index.html` en un navegador moderno.
- Mantén la implementación adecuada para un estudiante de 2.º de DAW: utiliza HTML, CSS y JavaScript claros, funciones pequeñas y eventos DOM sencillos. Evita frameworks, patrones avanzados y dependencias que no sean necesarias.

## Cambios y validación

- Mantén los cambios acotados y respeta las interacciones existentes.
- Comprueba a mano navegación entre pantallas, selección de necesidades, validación de registro de muestra, alta de recordatorios, teclado y visualización en móvil/tablet/escritorio.
- No añadas dependencias ni servicios externos sin necesidad; si cambias la carga de fuentes, conserva una alternativa de sistema.
