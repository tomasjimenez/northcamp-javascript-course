import Image from "next/image";
import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";
import Code from "../../../components/Code/Code";

export default function AgregandoJS() {
  return (
    <ModuleBlock
      ComponentToRender={<TemarioAgregandoJS />}
      back={{
        title: "Chrome y la consola: tus aliados",
        link: "/temario/chrome-y-consola",
      }}
      next={{
        title: "Variables",
        link: "/temario/variables/",
      }}
    ></ModuleBlock>
  );
}

const lineScriptExample = `<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript inline</title>
  </head>
  <body>
    <script>
      const name = "José Luis";

      console.log("Hi " + name + "!");
    </script>
  </body>
</html>`;

const outsideHTMLJavaScriptExample = `<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Outside File</title>
  </head>
  <body>
    <script src="src/js/greet.js" />
  </body>
</html>
`;

const outsideFileJavaScriptExample = `const name = "José Luis";

console.log("Hi " + name + "!");
`;

const javascriptModulesExample = `import React from 'react';`;

const javascriptModulesOldNavigatorsExample = `<script type="module">
  // Código que se ejecuta en navegadores modernos 
  import React from 'react';
</script>

<script nomodule>
  // Código que se ejecuta en navegadores antiguos
</script>
`;

function TemarioAgregandoJS() {
  return (
    <div className={styles.container}>
      <article>
        <h2 className={styles.title_block}>Agregando JavaScript</h2>
        <p>
          Si queremos incluir <strong>JavaScript</strong> a nuestro documento{" "}
          <strong>HTML</strong>, podemos realizarlo de distintas maneras. Los
          frameworks o librerías, muchas veces hacen este trabajo por nosotros y
          nos despreocupamos de agregar nuestro archivo JavaScript a un
          documento HTML. Vamos a ver distintas etiquetas en un documento HTML,
          pero las principales van a ser:{" "}
          <strong>DOCTYPE, html, head y body</strong>. Las otras etiquetas,
          serán etiquetas semánticas para dividir contenido como: article,
          header, footer, aside, nav, etc. Estas últimas no son necesarias para
          la estructura principal de un documento HTML pero sin las primeras no
          lo estaríamos realizando bien.
        </p>
        <p>
          En un documento HTML podemos agregarle estilos o scripts de
          JavaScript. Lo que hará el navegador es descargarlo y aplicar lo que
          le diga dicho documento. Si es un CSS, aplica los estilos o si es un
          archivo JavaScript ejecuta la lógica.
        </p>
        <p>
          Durante esta sección, veremos distintas formas de agregar JavaScript a
          nuestro documento HTML. Para empezar, vamos a realizar una práctica
          para ver que nuestro código JavaScript se ejecuta y muestra un{" "}
          <strong>console.log</strong> en la consola del navegador. Antes
          crearemos una variable con nuestro nombre y vamos a concatenar un
          string para que nos salude.
        </p>
        <h3 className={styles.subtitle_block}>JavaScript en línea</h3>
        <p>
          Una de las formas más fáciles de añadir código JavaScript a nuestro
          documento HTML es con la etiqueta <strong>script</strong>. Lo podemos
          poner dentro del head de un documento HTML, o también en el body.
          Ahora mismo no va a pasar nada donde lo pongamos, pero esto puede ser
          un problema a la hora de la performance de nuestra página y que se
          muestre bien todo.
        </p>
        <p>
          Pues dicho lo anterior, vamos a empezar a picar nuestro primer script
          en JavaScript:
        </p>
        <Code language="html" code={lineScriptExample} />
        <p>
          Vemos que podemos poner fácilmente código de JavaScript en nuestro
          archivo HTML, pero la mejor estrategia es separar toda la lógica fuera
          de nuestro documento HTML, por limpieza y para tener archivos
          independientes. Habrá veces que lo usemos en un inicio para hacer
          pruebas, pero como norma, no vamos a hacer uso de ello. Esta forma de
          poner nuestro código de Javascript en el documento HTML, la
          denominamos <strong>JavaScript en línea</strong> (inline).
        </p>
        <h3 className={styles.subtitle_block}>JavaScript en archivo externo</h3>
        <p>
          Antes hemos visto como poner JavaScript en inline, pero hemos visto
          que no es la mejor forma de implementarlo. Ya que sabemos esto, vamos
          a realizar el mismo ejemplo pero esta vez, el archivo de JavaScript
          estará fuera de nuestro documento HTML. Al realizarlo en un archivo
          externo, podemos reutilizar nuestro código en más páginas y no tenemos
          que estar copiando y pegando toda la lógica en todos lados. En
          programación hay una norma: si estás reptiendo algo, es que lo estás
          haciendo mal y lo puedes simplificar.
        </p>
        <p>
          Para llevar a cabo este ejercicio, debemos de crear un archivo
          javascript y otro html.
        </p>
        <p>
          <strong>Archivo HTML:</strong> index.html:
        </p>
        <Code language="html" code={outsideHTMLJavaScriptExample} />
        <p>
          <strong>Archivo JavaScript:</strong> src/js/greet.js:
        </p>
        <Code language="javascript" code={outsideFileJavaScriptExample} />
        <p>
          Una vez hecho esto, habremos visto dos maneras de ejecutar código
          JavaScript y siempre recordar que tenemos que evitar a toda costa
          poner JavaScript en inline.
        </p>
        <h3 className={styles.subtitle_block}>
          Importancia de colocar etiqueta script
        </h3>
        <p>
          En el primer ejemplo hemos comentado que podíamos poner nuestra
          etiqueta en el head o en el body, pero ¿hay alguna diferencia?. Tiene
          una gran diferencia, según donde pongas la etiqueta script, puede que
          se ejecute nuestro código cuando la página aún no esté pintada, cuando
          se esté pintando o cuando ya esté dibujada al 100%. Vamos a ver en una
          table las diferentes situaciones:
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>¿Cuándo?</th>
              <th>Momento de uso archivo JS</th>
              <th>Estado del render de la página</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                En <strong>&lt;head&gt;</strong>
              </td>
              <td>Antes de renderizarse la página</td>
              <td>No se ha renderizado nada en la página</td>
            </tr>
            <tr>
              <td>
                En <strong>&lt;body&gt;</strong>
              </td>
              <td>Mientras se renderiza la página</td>
              <td>Se renderiza hasta que llega a la etiqueta &lt;script&gt;</td>
            </tr>
            <tr>
              <td>
                Antes del <strong>&lt;/body&gt;</strong>
              </td>
              <td>Después de renderizarse la página</td>
              <td>Se ha renderizado todo el contenido de la página</td>
            </tr>
          </tbody>
        </table>
        <p>
          La opción que más veremos es en el <strong>head</strong> o antes del
          cierre del <strong>body</strong>, pero siempre tenemos que saber que
          hacemos en cada momento para no bloquear la carga de la página o poder
          cargar nuestro script a tiempo. Al final de esta sección, veremos cómo
          podemos utilizar a nuestro a favor la carga de JavaScript y así ver
          qué manera se adapta más a nuestras necesidades.
        </p>
        <h3 className={styles.subtitle_block}>Analizando etiqueta script</h3>
        <p>
          Hemos utilizado ya la etiqueta script, pero no hemos profundizado
          realmente qué atributos tiene y qué podemos hacer con él. La etiqueta{" "}
          <strong>script</strong>, se utiliza para carga de código JavaScript.
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Atributo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>src</strong>
              </td>
              <td>
                Introducimos la URL de donde se localiza nuestro script de
                JavaScript
              </td>
            </tr>
            <tr>
              <td>
                <strong>type</strong>
              </td>
              <td>
                Por defecto si no ponemos nada, tendrá por defecto
                <strong>text/javascript</strong>. Pero aquí también podemos
                poner que nuestro archivo es un módulo de JavaScript, para poder
                utilizar las funcionalidades <strong>import</strong> o{" "}
                <strong>export</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>nomodule</strong>
              </td>
              <td>
                Poniendo este atributo, haremos que no se cargue nuestro código
                en navegadores modernos.
              </td>
            </tr>
            <tr>
              <td>
                <strong>async</strong>
              </td>
              <td>
                Ejecuta nuestro código cuando se haya descargado nuestro script,
                sin hacer que pare nuestro navegador durante la descarga.
              </td>
            </tr>
            <tr>
              <td>
                <strong>defer</strong>
              </td>
              <td>
                Ejecuta nuestro código cuando se haya descargado todo nuestro
                documento, pero mientras también se descarga nuestro archivo
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className={styles.subtitle_block}>
          ¿Cómo se descargan nuestros scripts?
        </h3>
        <p>
          Cuando utilizamos la etiqueta <strong>script</strong> en nuestro
          código, y mediante un archivo externo, lo que va a suceder es que
          cuando el navegador llegue a nuestro script, se pare la carga de HTML.
          Una vez parada, descargará nuestro archivo JavaScript y una vez
          descargado, lo ejecutará. Una vez ejecutado, se reanuda toda la carga
          de HTML. Resumiendo:
        </p>
        <ol className="ol-list">
          <li>
            - Se carga todo nuestro HTML hasta que llega una etiqueta script o
            una hoja de estilos.
          </li>
          <li>
            - Una vez llegado a un archivo, la carga de HTML{" "}
            <strong>se detiene</strong>.
          </li>
          <li>
            - Al estar parado, <strong>descarga</strong> nuestro archivo.
          </li>
          <li>
            - Una vez descargado se <strong>ejecuta</strong> el contenido.
          </li>
          <li>
            - Una vez nuestro código ha sido ejecutado, se{" "}
            <strong>reanuda</strong> nuestra carga de HTML
          </li>
        </ol>
        <p>
          Podemos controlar nuestra carga a través de distintos atributos, como
          son <strong>defer</strong> <strong>async</strong>. A continuación se
          añade un gráfico donde vamos a ver perfectamente cómo funciona cada
          tipo de carga, y así podemos comprender cómo funciona cada estrategia
          de carga.
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/agregando-javascript/carga-javascript.jpeg"
            width="900"
            height="400"
            alt="Carga JavaScript"
            loading="lazy"
          />
        </div>
        <p>
          Para entender un poco el gráfico, debemos de entender que el color
          amarillo es la carga de HTML, el color verde es cuando se descarga
          nuestro archivo js y el rojo es la ejecución de nuestro código js.
        </p>
        <h3 className={styles.subtitle_block}>Carga de módulos JavaScript</h3>
        <p>
          En JavaScript moderno, podemos importar y exportar por ejemplo
          funciones, variables o lo que queramos, y así poder utilizarlo en
          otras partes de nuestra aplicación. Todo esto lo veremos más a
          profundidad más adelante, pero podemos verlo por ejemplo cuando
          utilizamos React, cuando realizamos lo siguiente:
        </p>
        <Code language="javascript" code={javascriptModulesExample} />
        <p>
          El siguiente código vemos que del archivo react, importa la Clase
          React. Hay que saber que todos los módulos, si no indicamos nada, se
          ejecutan en modo <strong>defer</strong>.
        </p>
        <p>
          Los navegadores antiguos, no soportan utilizar módulos de JavaScript,
          así que tenemos un atributo llamado <strong>nomodule</strong>, que
          ejecutaremos sólo en navegadores antiguos. Vamos ver un ejemplo de
          como utilizarlos:
        </p>
        <Code language="html" code={javascriptModulesOldNavigatorsExample} />
      </article>
    </div>
  );
}
