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
          En la pestaña de consola, podremos escribir lo que queramos, pero
          siempre en lenguaje JavaScript. Podemos escribir lo que queramos en
          JavaScript, ejecutar trozos de código o manipular archivos de nuestro
          DOM en vivo. Esto nos da un poder muy grande para poder debuggear, y
          debemos de saber utilizar bien esta herramienta.
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
      </article>
    </div>
  );
}
