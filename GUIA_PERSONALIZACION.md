# Personalizar VISLY

## Correo del formulario y correo visible

El formulario prepara sus solicitudes para **ineo.hospital.dev@gmail.com**. El correo general visible de la organización es **soporte.visly@gmail.com**, según el documento proporcionado.

Para cambiar solo el destinatario del formulario:

1. En `assets/js/main.js`, modifica el destinatario en la línea que asigna `mailLink.href`.
2. En `index.html`, modifica el atributo `action` de `<form id="contactForm">`.

La constante `CONTACT_EMAIL` se utiliza para copiar el correo visible de VISLY. Los enlaces de contacto, textos del pie y datos de las páginas legales se editan por separado si decides cambiarlos.

El envío requiere que el visitante abra su aplicación de correo y lo confirme allí.

## Ubicación y horario

En `index.html`, edita la sección `id="contacto"`, el texto de Nosotros y el pie de página. Actualiza también el domicilio y la identidad legal en `privacidad.html` y los datos de contacto en las otras páginas legales. El horario propuesto es de lunes a viernes, de 9:00 a 18:00, hora del centro de México.

## Colores y tipografía

Las variables de marca están al principio de `assets/css/style.css`:

```css
:root {
  --ink: #252d43; /* Color principal */
  --accent: #7165bc; /* Acento lavanda */
  --accent-dark: #5e51a3; /* Enlaces al pasar el cursor */
  --paper: #f7f7f2; /* Fondos suaves */
  --muted: #666c7c; /* Texto secundario */
}
```

El sitio usa las fuentes del dispositivo. No descarga fuentes externas. Si cambias colores, revisa que los textos, campos y botones sigan teniendo contraste suficiente.

## Logo

El logo y el símbolo se extrajeron del documento de información general de la organización, sin modificar los píxeles de las imágenes originales. Esas imágenes están disponibles en `logo-visly-original.png` y `simbolo-visly-original.png`.

El sitio conserva sus rutas SVG y sus dimensiones de presentación para no cambiar el diseño. Estos SVG encapsulan las imágenes originales y conservan sus proporciones. La imagen original es raster; aumentar su tamaño más allá de su resolución puede reducir la nitidez.

`logo-visly-white.svg` contiene el mismo logotipo sobre fondo blanco, manteniendo la ruta compatible con la versión anterior. El favicon usa el símbolo del documento. `social-cover.svg` incorpora el logo actualizado.

Si sustituyes los archivos, conserva sus nombres o actualiza las rutas de todos los HTML.

## Textos y secciones

La página principal utiliza estas anclas:

| Sección                   | Identificador |
| ------------------------- | ------------- |
| Servicios                 | `servicios`   |
| Ejemplos interactivos     | `soluciones`  |
| Nosotros, misión y visión | `nosotros`    |
| Proceso                   | `proceso`     |
| Preguntas frecuentes      | `preguntas`   |
| Contacto                  | `contacto`    |

Puedes cambiar textos sin modificar JavaScript. Si eliminas o renombras una sección, actualiza sus enlaces del menú y del pie de página.

Las pestañas relacionan cada botón con un panel mediante `aria-controls`. Conserva esas asociaciones. Los vínculos con `data-service` preseleccionan el servicio en el formulario: su valor debe coincidir con una opción de `contactService`.

## Animaciones

Las entradas y la flotación se definen en `assets/css/style.css`. La clase `reveal` identifica bloques que aparecen al entrar en pantalla. Sin JavaScript siguen visibles. El sitio desactiva movimiento y transiciones si el dispositivo tiene activada la preferencia de movimiento reducido.

## Si quieres envío directo desde la página

Esta entrega usa correo con confirmación manual del visitante. Para recibir solicitudes directamente en un servidor, integra un servicio de formularios o un backend. La validación debe repetirse en el servidor y la confirmación de envío debe depender de una respuesta real. No pongas contraseñas SMTP ni claves privadas en JavaScript.

Si se agregan proveedores, almacenamiento o rastreadores, actualiza los avisos de privacidad y cookies para describir su funcionamiento real.

## Comprobación antes de publicar

Abre la página en computadora y celular; prueba las tres pestañas, el menú y las preguntas frecuentes. Prepara una solicitud con datos de prueba, confirma que el destinatario es tu cuenta real y verifica el envío desde tu aplicación de correo. Revisa el alcance comercial y las páginas legales con los datos definitivos de VISLY.

## Misión, visión y valores

La página `filosofia.html` tiene tres apartados: `mision`, `vision` y `valores`. Sus cinco valores son compromiso, calidad, honestidad, innovación y responsabilidad, con sus descripciones tomadas del documento de la organización. Sus estilos específicos están al final de `assets/css/style.css` y utilizan nombres que comienzan por `philosophy`, `purpose-detail` o `value-detail`.

El menú de todas las páginas y el pie incluyen el acceso a esta página. El apartado Nosotros conserva su resumen y añade un enlace a la explicación completa. Los términos y condiciones están en `terminos.html`, con acceso directo desde el menú, el pie y la nueva página de filosofía.
