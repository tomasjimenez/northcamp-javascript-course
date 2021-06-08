import Image from "next/image";
import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";
import Code from "../../../components/Code/Code";

export default function ChromeConsola() {
  return (
    <ModuleBlock
      ComponentToRender={<TemarioChromeConsola />}
      back={{
        title: "Conociendo JavaScript",
        link: "/temario/conociendo-javascript",
      }}
      next={{
        title: "Agregando JavaScript en HTML",
        link: "/temario/agregando-javascript-en-html/",
      }}
    ></ModuleBlock>
  );
}

const holaMundoPrism = `console.log("hola mundo!");`;
const sytlesInConsole = `console.log("%cNorthCampSchool", 
"padding: 10px; background-color: #01a784; color: #FFF; font-weight: bold;");`;

function TemarioChromeConsola() {
  return (
    <div className={styles.container}>
      <article>
        <h2 className={styles.title_block}>Chrome y la consola: tus aliados</h2>
        <p>
          Todos los navegadores web modernos tienen una consola, es una
          herramienta para mostrar mensajes de información, de error o de alerta
          a ciertas peticiones o acciones en una página. La consola está dentro
          del de las <strong>Dev Tools</strong> de un navegador, y allí
          encontraremos más cosas, como el inspector de elementos, las
          peticiones que envías o recibes, etc. En este curso vamos a usar las
          Dev Tools de Google Chrome, y poco a poco, se enseñarán más
          herramientas.
        </p>

        <h3 className={styles.subtitle_block}>¿Cómo abrir las Dev Tools?</h3>
        <p>
          Para abrir las Dev Tools de Google Chrome, vamos a poder realizarlo de
          dos maneras: desde un atajo de teclado o junto nuestro puntero del
          ratón. La mejor forma es a través del atajo de teclado, es más rápido
          y más cómodo. A continuación aportamos las dos maneras:
        </p>
        <ol className="ol-list">
          <li>
            - A través de la combinación de teclas <kbd>CTRL</kbd>+{" "}
            <kbd>SHIFT</kbd>+<kbd>I</kbd> ó <kbd>CMD</kbd>+<kbd>SHIFT</kbd>+
            <kbd>I</kbd> en mac.
          </li>
          <li>
            - En cualquier elemento de la página mostrada, damos click con el
            botón secundario y seleccionamos inspeccionar.
          </li>
        </ol>
        <p>
          Una vez abierta, veremos que tenemos muchas opciones, y la que nos
          interesa es la pestaña de "Console".
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/chrome-y-consola/dev-tools-google-chrome.jpg"
            width="1000"
            height="543"
            alt="Logo Northcamp School"
            loading="lazy"
          />
        </div>
        <p>
          En la pestaña de consola, podremos escribir lo que nos plazca, pero
          siempre en lenguaje JavaScript, nos puede ser muy útil para ejecutar
          trozos de código o manipular archivos de nuestro DOM en vivo. Esto nos
          da un poder muy grande para poder debuggear, y debemos de saber
          utilizar bien esta herramienta.
        </p>
        <p>
          Vamos con nuestro primer "hola mundo", va a ser una forma muy sencilla
          pero efectiva. Debemos de poner el siguiente código en la consola, y
          después pulsar la tecla <kbd>ENTER</kbd>:
        </p>
        <Code language="javascript" code={holaMundoPrism} />
        <p>
          Como resultado, veremos en pantalla reflejado "hola mundo!", ¡ya hemos
          hecho nuestra primera línea de JavaScript!. Hemos mostrado en pantalla
          un string (una cadena de texto), pero, ¿realmente que es console.log?.
        </p>
        <h3 className={styles.subtitle_block}>Console de JavaScript</h3>
        <p>
          JavaScript tiene un objeto llamado <strong>Console</strong> que provee
          acceso a la consola de depuración de los navegadores. Los detalles de
          como funciona, varían de navegador en navegador, pero casi todas las
          características son generalmente iguales. Este objeto es usado muchas
          veces por muchas personas para debuggear partes de un código, para
          saber que resultado da una variable o para saber el órden de
          ejecución. Para este caso, es recomendable usar el debugger que nos
          brindan los navegadores, ya que nos da mucha más información y vamos a
          poder ver en todo momento que pasos sigue nuestra aplicación.
        </p>
        <p>
          Mucha gente desconoce que el objeto <strong>console</strong> tiene más
          métodos, y muchos pueden ser muy útiles. A continuación hacemos un
          desglose de los más importantes:
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Método</th>
              <th>¿Qué hace?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.bold}>console.log()</td>
              <td>
                Muestra por la consola lo que le proveemos al método, desde
                texto plano, variables, objetos...
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.error()</td>
              <td>
                Se utiliza para mostrar mensaje de error. Estos mensajes
                aparecen en rojo en nuestro
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.warn()</td>
              <td>
                El mensaje que nos proporciona es de advertencia, en consola lo
                veremos de color amarillo.
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.info()</td>
              <td>
                Es muy parecido al console.log(), pero en este caso nos muestra
                mensajes de información en la consola.
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.clear()</td>
              <td>
                Nos limpia la consola, pero podemos escribir también
                directamente <strong>clear()</strong>, o también utilizando{" "}
                <kbd>CTRL</kbd>+<kbd>L</kbd>, el mismo comando para personas que
                usen un mac
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.group(label)</td>
              <td>Anida grupos de console añadiéndoles una tabulación</td>
            </tr>
            <tr>
              <td className={styles.bold}>console.groupCollapsed(label)</td>
              <td>
                Encpasula todos los console que pongamos en un grupo, y
                tendremos que expandir el grupo para ver todo lo que hay.
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.groupEnd(label)</td>
              <td>
                Quita un nivel a la anidación de un{" "}
                <strong>console.group()</strong> o un{" "}
                <strong>console.groupCollapsed()</strong>
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.table(data)</td>
              <td>
                Este método debes de pasarle un objeto o un array, y también
                tiene un parámetro adicional llamado <strong>columns</strong>,
                para mostrar sólo los datos que queramos: console.table(data,
                ["columna"])
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.time(label)</td>
              <td>
                Podemos saber cuanto tiempo ha pasado al ejecutarse ciertas
                acciones y le podemos añadir un label para indicarle el nombre
                al temporizador
              </td>
            </tr>
            <tr>
              <td className={styles.bold}>console.timeEnd(label)</td>
              <td>
                Detiene el temporizador que se haya creado con{" "}
                <strong>console.time(label)</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className={styles.subtitle_block}>¿Estilos en la consola?</h3>
        <p>
          Podemos darle un toque peculiar a nuestros textos en la consola, es
          algo que no es muy práctico, pero es curioso saberlo. Para poder
          realizar esto vamos a analizar el siguiente código:
        </p>
        <Code language="javascript" code={sytlesInConsole} />
        <p>
          Si lo ejecutamos vemos que nos añade el texto con un fondo de color y
          unos cuantos detalles de estilos más. Para utilizar estilos, debemos
          de poner <strong>%c</strong> antes del texto que deseemos poner.
        </p>
        <h3 className={styles.subtitle_block}>
          ¿Podemos usar obviar el console.log()?
        </h3>
        <p>
          Si vamos a utilizar la consola de Chrome podemos obviar el{" "}
          <strong>console.log()</strong>, pero ojo, si lo vamos a utilizar desde
          una web o una aplicación Javascript, debemos de utilizar siempre el
          objeto <strong>console.log()</strong>.
        </p>
        <h3 className={styles.subtitle_block}>
          Chrome Dev Tools: características importantes
        </h3>
        <p>
          Las Dev Tools de Chrome o de cualquier otro navegador, son bastante
          potentes, nos hemos centrado hasta ahora a la parte de la consola,
          pero realmente le vamos a dar más uso a otras herramientas
          incorporadas.
        </p>
        <h3 className={styles.subtitle_block}>Elements (elementos)</h3>
        <p>
          Esta herramienta, muestra la estructura del documento HTML (el DOM del
          docuemnto). Vamos a analizar distintas herramientas que tiene este
          apartado:
        </p>
        <ol className="ol-list">
          <li>
            - <strong>Inspeccionar el DOM</strong>: podemos visualizar el DOM de
            los elementos, modificarlos, etc.{" "}
          </li>
          <li>
            - <strong>Ver los estilos de los elementos</strong>: podemos
            visualizar los estilos, modificarlos, etc.
          </li>
          <li>
            - <strong>Seleccionar elementos del DOM desde la consola:</strong> a
            través del comando $("element") podemos seleccionar cualquier
            elemento, esto equivaldría a document.querySelector("elemento"). Si
            queremos seleccionar todos los elementos de un documento
            utilizaremos el doble dólar, y lo haríamos de la siguiente manera:
            $$("elemento"). Podemos inspeccionar desde la consola a través del
            método inspect(), nos señalará en el navegador en elemento que le
            hemos puesto en el inspect.
          </li>
          <li>
            - <strong>Referencia a una selección:</strong> podemos seleccionar
            una parte del DOM, visualizarlo y editarlo sin tener que hacer una
            búsqueda. Lo usuaremos a través de $0 (hay hasta 4 elementos en el
            histórico).
          </li>
          <li>
            - <strong>Ver las propiedades de un elemento:</strong> podemos
            combinar el anterior comando con el comando dir, para ver las
            propiedades o los métodos de un elemento del DOM.
          </li>
        </ol>
      </article>
    </div>
  );
}
