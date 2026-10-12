# VISLY · Sitio corporativo

Proyecto estático para presentar los servicios de Visly - Desarrollo de Software y Soluciones Tecnológicas: páginas web, sistemas a medida, aplicaciones y mantenimiento. Identidad visual en azul tinta, blanco cálido y lavanda. Datos de la organización y logo tomados del documento proporcionado. Ubicación: Carretera del Departamento del D.F. kilómetro 7.5, Ejido de Santa María Atarasquillo, Lerma, Estado de México.

## Abrir la página

1. Extrae el ZIP completo.
2. Abre `VISLY/index.html` con Chrome, Edge, Firefox o Safari.
3. Conserva la carpeta `assets` junto a los cinco archivos HTML.

No necesita instalación, compilación, Node.js, una base de datos ni conexión a internet para mostrar el diseño. Los enlaces de correo sí requieren una aplicación de correo; el envío requiere conexión.

Para una revisión con servidor local, desde esta carpeta puedes ejecutar:

```bash
python -m http.server 8000
```

Después entra a `http://localhost:8000`. En Windows también puedes usar la extensión Live Server de Visual Studio Code.

## Contenido incluido

- Inicio con presentación y gráfico conceptual de un sistema.
- Servicios: páginas web, sistemas a medida, aplicaciones y acompañamiento.
- Tres ejemplos de diseño con pestañas y navegación por teclado.
- Nosotros y página independiente de misión, visión y valores.
- Proceso de trabajo en cuatro etapas.
- Preguntas frecuentes desplegables.
- Contacto, ubicación y horario.
- Términos y condiciones, aviso de privacidad y cookies/navegación.
- Logo y símbolo del documento original, archivos PNG originales, versiones SVG compatibles con el sitio, favicon y composición de marca.
- Menú adaptable, animaciones de entrada y respeto al movimiento reducido.
- Dependencias locales de Bootstrap con su licencia MIT.

## Archivos

| Archivo                                 | Función                                                        |
| --------------------------------------- | -------------------------------------------------------------- |
| `index.html`                            | Página principal y contenido corporativo                       |
| `filosofia.html`                        | Misión, visión y cinco valores conforme al documento           |
| `terminos.html`                         | Condiciones del sitio y bases de contratación                  |
| `privacidad.html`                       | Aviso sobre datos y contacto                                   |
| `cookies.html`                          | Información de cookies y navegación                            |
| `assets/css/style.css`                  | Identidad visual, componentes, animaciones y reglas adaptables |
| `assets/js/main.js`                     | Menú, pestañas, copia y preparación de correo                  |
| `assets/img/logo-visly.svg`             | Logo del documento encapsulado en SVG                          |
| `assets/img/logo-visly-white.svg`       | Mismo logo del documento sobre fondo blanco                    |
| `assets/img/logo-visly-original.png`    | Imagen original del logo extraída del documento                |
| `assets/img/simbolo-visly-original.png` | Imagen original del símbolo extraída del documento             |
| `assets/img/favicon.svg`                | Símbolo del documento para la pestaña del navegador            |
| `assets/img/social-cover.svg`           | Composición de marca de 1200 × 630                             |
| `assets/vendor/bootstrap/`              | Bootstrap 5.3.8 local y licencia                               |
| `GUIA_PERSONALIZACION.md`               | Cambios de contenido, colores y publicación                    |

## Funcionamiento del formulario

El botón **Preparar solicitud** valida los campos y crea un mensaje. Después, **Abrir mi correo** abre un enlace `mailto:`. El visitante revisa y envía el correo desde su propia aplicación. Si no tiene una aplicación configurada, puede copiar el mensaje y pegarlo en Gmail u otro servicio.

El destinatario del formulario está configurado como **ineo.hospital.dev@gmail.com**. El correo general visible y el botón que lo copia usan **soporte.ineo.mx@gmail.com**, conforme al documento de la organización.

La página no envía correos automáticamente ni muestra una confirmación de recepción. No tiene servidor de formularios ni guarda los datos en una base de datos. No usa cookies, analítica, localStorage o sessionStorage. Las entradas del visitante se muestran con `textContent`, no como HTML.

## Datos ilustrativos y páginas legales

Los antecedentes, misión, visión, cinco valores, dirección, teléfonos, correo general y sitio web de referencia se tomaron del documento de la organización proporcionado. El logo y el símbolo se reutilizaron desde ese mismo archivo, conservando las imágenes originales. El horario de atención se conserva de la versión previa del sitio.

Las pantallas de demostración, la marca “forma”, los nombres y las cifras son ilustrativos. No representan clientes, testimonios ni proyectos entregados.

Los textos legales son borradores adaptados al funcionamiento de este sitio. Antes de recibir solicitudes reales, confirma los datos de la persona o entidad responsable, los proveedores y los procedimientos de atención de datos y revisa los textos conforme a la operación real. No constituyen una revisión legal ni una garantía de cumplimiento. Referencia oficial consultada: [Ley Federal de Protección de Datos Personales en Posesión de los Particulares](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf).

## Publicación

Sube los cinco archivos HTML y toda la carpeta `assets` a un alojamiento estático. `index.html` debe quedar en la raíz del sitio. Usa HTTPS y mantén las rutas relativas. No es necesario subir este README ni la guía de personalización.

El proyecto se entrega como archivos locales. No se ha publicado ni configurado un dominio, alojamiento o cuenta de correo.

## Verificación y compatibilidad

Se revisaron la sintaxis de JavaScript, los enlaces locales, las anclas, asociaciones de etiquetas y controles, recursos SVG y la integridad del ZIP. Se verificó la lógica de las pestañas y preparación de correo en una simulación del DOM. Las reglas adaptables incluyen anchos de 480, 768, 992 y 1200 px.

La revisión visual en un navegador real no estuvo disponible en este entorno. Antes de publicar, abre la página y comprueba el menú, las preguntas frecuentes, el formulario y la visualización en tu teléfono. El comportamiento de `mailto:` y del portapapeles depende del navegador y de las aplicaciones configuradas.

## Créditos

Diseño del sitio, iconos de interfaz y gráficos conceptuales creados para este proyecto. El logo y el símbolo proceden del documento de la organización proporcionado. Bootstrap 5.3.8, copyright de sus autores, utilizado bajo licencia MIT. La licencia se conserva en `assets/vendor/bootstrap/LICENSE` y en los encabezados de sus archivos.
