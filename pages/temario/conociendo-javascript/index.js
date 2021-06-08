import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";

export default function ConociendoJavascript() {
  return (
    <ModuleBlock
      ComponentToRender={<TemarioConociendoJavaScript />}
      back={{ title: "Temario", link: "/" }}
      next={{
        title: "Chrome y la consola: tus aliados",
        link: "/temario/chrome-y-consola/",
      }}
    ></ModuleBlock>
  );
}

function TemarioConociendoJavaScript() {
  return (
    <div className={styles.container}>
      <article>
        <h2>Conociendo JavaScript</h2>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/conociendo-javascript/javascript-logo.png"
            width="300"
            height="300"
            alt="Logo JavaScript"
            loading="lazy"
          />
        </div>
        <p>
          <strong>JavaScript</strong> es un lenguaje de programación
          <strong> interpretado</strong>, significa que no necesita compilarse
          (pasar de un lenguaje a otro). Sigue la especificación de
          <strong> ECMAScript</strong>, organización internacional que se dedica
          a estandarizar el lenguaje de programación. Es un lenguaje de
          programación <strong>orientado a objetos</strong> (paradigma de
          programación), <strong>basado en prototipos</strong> (no existen las
          clases, el concepto de herencia es distinto),{" "}
          <strong>imperativo</strong> (instrucciones paso a paso como si fuera
          para el ordenador), <strong>débilmente tipado</strong> (no le asignas
          tipos a las variables) y <strong>dinámico</strong> (que puede cambiar
          el tipo de las variables).
        </p>
        <p>
          Se utiliza en el <strong>lado del cliente</strong> (en tu propio
          ordenador), principalmente en un navegador web, permitiendo mejorar la
          interfaz de usuario y realizar páginas web dinámicas de una manera muy
          fácil. En la actualidad es uno de los pilares del diseño web, se
          utiliza junto HTML y CSS. JavaScript también lo podemos encontrar en
          el lado del servidor, a través de <strong>NodeJS</strong>.
        </p>
        <h2 className={styles.subtitle_block}>
          <Link href="#">
            <a id="un-poco-de-historia" className={styles.link_off}>
              Un poco de historia
            </a>
          </Link>
        </h2>
        <p>
          La historia de JavaScript pasa por hablar de{" "}
          <strong>navegadores</strong>, así que nos vamos a remontar a diciembre
          de 1990. En esa época nace el primer navegador web en modo gráfico, el{" "}
          {""}
          <strong>WorldWideWeb</strong> (después se llamará Nexus), se realizó
          para el sistema operativo NEXSSTEP y fue desarrollado por{" "}
          <strong>Tim Berners-Lee</strong>, uno de los padres de Internet,
          mientras trabajaba para el CERN.
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/conociendo-javascript/worldwideweb.jpeg"
            width="800"
            height="464"
            alt="Captura de pantalla de WorldWideWeb de 1993"
            loading="lazy"
          />
        </div>
        <p>
          En diciembre de 1991 en Estados Unidos aprueba la{" "}
          <strong>ley de computación de alto desempeño</strong>, donde inyecta
          capital para extender y modernizar todo lo relacionado con el estándar
          WWW (World Wide Web). Gracias a ello, nacen proyectos como{" "}
          <strong>Mosaic</strong> a inicios de 1993, que fue el primer navegador
          web de uso extendido. Mosaic fue desarrollado por{" "}
          <strong>Marc Andreessen</strong> y <strong>Eric Bina</strong>{" "}
          principalmente para sistemas UNIX (sistema operativo portable y
          multitarea). Fue tanto el éxito de Mosaic, que a finales de ese año
          sacaron versiones para plataformas Windows y Macintosh.
        </p>
        <p>
          Después de que Marc Andreessen se graduara crea{" "}
          <strong>Netscape</strong> basado en el código del archiconocido
          Mosaic. <strong>Netscape</strong> era un navegador gratuito y empezó a
          poder utilizarse en noviembre de 1994 (versión beta 1), la primera
          versión estable se lanzó en diciembre de 1994. Aún no tenemos rastro
          de JavaScript, pero empezamos a tener algo parecido al actual DOM
          (representación de una estructura de nodos de un documento HTML, XHTML
          y XML). Las páginas web eran muy estáticas, y buscaban una solución
          para darle dinamismo a las páginas web. La primera solución que
          encontraron era JAVA, pero se dieron cuenta que no se adaptaba muy
          bien en el contexto de navegación web.
        </p>

        <p>
          En abril de 1995 Netscape contrató a <strong>Brendan Eich</strong>, se
          le dio la tarea de crear un prototipo funcional de un lenguaje de
          programación que se ejecutara en el navegador, que se pareciera a JAVA
          y que sólo iba a tener... <strong>10 días</strong> para desarrollarlo.
          Es una proeza hacer algo así en este periodo de tiempo, y así podemos
          entender como JavaScript es un lenguaje un poco "especial".
        </p>
        <p>
          En tan breve periodo, a <strong>Brendan</strong> no le daba tiempo a
          realizar un lenguaje tan complejo y completo como JAVA, pero sí que
          pudo hacer una{" "}
          <strong>
            herramienta flexible y moldeable al gusto del programador
          </strong>
          . Su sintáxis se parece a JAVA (llaves, paréntesis, puntos y comas...)
          y coge cosas de otros lenguajes de programación, como el tipado
          dinámico de Lisp o la herencia basada en prototipos de Self.
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/conociendo-javascript/brendan-eich.jpeg"
            width="400"
            height="400"
            alt="Brendan Eich"
            loading="lazy"
          />
        </div>
        <p>
          Al principio JavaScript se llamaba <strong>Mocha</strong>, que
          posteriormente fue renombrado a <strong>LiveScript</strong> por
          septiembre de 1995, para que finalmente se quedase con el nombre de{" "}
          <strong>JavaScript</strong> a finales de 1995. En este último cambio,
          es cuando ya se empieza implementar JavaScript en el navegador
          Netscape, ha nacido un lenguaje.
        </p>
        <p>
          Microsoft saca una versión propia de JavaScript llamada{" "}
          <strong>JScript</strong> en agosto de 1996, implementándolo a Internet
          Explorer. Eran versiones completamente compatibles (Netscape y IE),
          pero se tenía miedo a que cada uno hiciera un lenguaje totalmente
          diferente. Gracias a ello en 1996 nace el <strong>W3C</strong> (World
          Wide Web Consortium) y crea el estándar del DOM. Por su parte{" "}
          <strong>ECMA</strong> crea el primer estándar en junio de 1997 para
          JavaScript, llamado <strong>ECMA-262</strong> o también llamada{" "}
          <strong>ECMAScript</strong>. En junio de 1998 sale la versión 2 (ES2)
          de la especificación y en diciembre de 1999 sale la versión 3 (ES3),
          con: expresiones regulares, mejora de manejo de strings, try/catch,
          etc.
        </p>
        <p>
          JavaScript ya empieza a estar <strong>estandarizado</strong> y saca
          músculo, pero comienza un declive en el mundo tecnológico que afectara
          al lenguaje.
        </p>
        <p>
          A partir del 2000 en Estados Unidos, a causa de los atentados del 11S,
          se cambian las políticas de priorizar el desarrollo de nuevas
          tecnologías y por eso muchas empresas tecnológicas (las llamadas .com)
          quiebran o son adquiridas por otras. Netscape fue adquirida por AOL, y
          esto le da mucho peso a Microsoft con su navegador Internet Explorer,
          haciéndose <strong>dueño del mercado</strong> y sin ninguna oposición
          de otra empresa.
        </p>
        <p>
          En 2001 se tenía que lanzar la versión ECMAScript 4 (ES4), pero debido
          a diferencias políticas en la complejidad del lenguaje, Yahoo y
          Microsoft <strong>deciden abandonar la nueva edición</strong>. Se
          intenta hacer una versión ES3.1 para mejorar el lenguaje, pero
          realmente no llega nunca.
        </p>
        <p>
          Después de esta época, Windows instala Internet Explorer en su sistema
          operativo por defecto, y se hace con un{" "}
          <strong>92% del mercado</strong>. Haciendo abuso del nicho de mercado,
          Microsoft empieza a hacer JavaScript bajo sus propias reglas, sin
          llegar a consensos con nadie más. El resto de fabricantes hacían lo
          que querían: unos seguían a Microsoft, otros seguían a ECMA y otros
          hacían sus aportes propios,{" "}
          <strong>llega el caos a los desarrolladores</strong>.
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/conociendo-javascript/internet-explorer.jpeg"
            width="400"
            height="400"
            alt="Meme Internet Explorer"
            loading="lazy"
          />
        </div>
        <p>
          Las conexiones a internet mejoran y estaba el problema de incorporar
          contenido multimedia a las páginas web. Todo el mundo hacía lo que
          quería y bajo ese contexto, nace <strong>Flash</strong>, nos brindaba
          una solución para poder ver vídeos o escuchar audios. Era una
          tecnología pesada y con muchos problemas.
        </p>
        <p>
          En agosto de 2006 nace <strong>JQuery</strong> a manos{" "}
          <strong>John Resig</strong>, una biblioteca de JavaScript que
          intentaba unificar el uso de JavaScript de una manera más fácil, pero
          lejos de ello, es una biblioteca que en la actualidad no tiene mucho
          sentido. Con esta biblioteca modificamos el DOM y simplifica la
          sintaxis de uso para buscar, seleccionar o manipular cualquier
          elemento del DOM. Los principios de JQuery son: separación de
          JavaScript y HTML, brevedad y claridad, eliminación de
          incompatibilidad entre navegadores y extensibilidad.
        </p>
        <p>
          Google en septiembre de 2008 lanza su propio navegador web, llamado{" "}
          <strong>Google Chrome</strong>. Chrome crea un motor de código abierto
          para JavaScript y WebAssembly que le ponen nombre de{" "}
          <strong>V8</strong>. Gracias a esta creación, va a abrir un nuevo
          camino para que JavaScript tome el peso que se merece y vuelva a ser
          un <strong>lenguaje relevante</strong> dentro del mundo del
          desarrollo.
        </p>
        <p>
          En mayo de 2009 el mundo de JavaScript empieza a tener una gran
          revolución: JavaScript siempre se había ejecutado en el navegador,
          pero ahora habían logrado (hubo otros intentos sin mucho éxito)
          ejecutarlo fuera del navegador, usando el exitoso motor de Google
          Chrome V8. Gracias a esto nace <strong>NodeJS</strong> de la mano de{" "}
          <strong>Ryan Dahl</strong>, podíamos correr JavaScript donde
          quisiéramos.
        </p>
        <p>
          También en esta época en diciembre de 2009, nace por fin otro nuevo
          estándar de <strong>ECMAScript la ES5</strong>, había pasado ya casi{" "}
          <strong>10 años sin un estándar</strong> y se había implementado cosas
          que se habían pensado para la famosa ES3.1.
        </p>
        <p>
          Gracias a esta revolución, empiezan a salir en 2010 librerías o{" "}
          <strong>frameworks para JavaScript</strong>, como son{" "}
          <strong>AngularJS</strong> o <strong>BackboneJS</strong>. Empiezan a
          nacer las llamadas <strong>SPA</strong> (Single Page Application),
          aplicaciones web donde todas las pantallas las muestra la misma
          página, sin recarga alguna del navegador.
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/conociendo-javascript/frameworks-js.png"
            width="700"
            height="350"
            alt="Logos frameworks JavaScript"
            loading="lazy"
          />
        </div>
        <p>
          Tras estas primeras librerías o frameworks, nacen muchos más, y nacen
          como "setas". En mayo de 2013 nace <strong>ReactJS</strong> de la mano
          de <strong>Jordan Walke</strong>, trabajador de Facebook, y en febrero
          del 2014 <strong>Evan You</strong>, un ex trabajador de Google libera
          una librería llamada <strong>VueJS</strong>.
        </p>
        <p>
          Tras este boom de librerías y frameworks, hubo una gran demanda de
          realizar aplicaciones para móviles y de ahí nació{" "}
          <strong>PhoneGap</strong> y también <strong>Ionic</strong>. Estas dos
          corrían JavaScript y hacían aplicaciones híbridas, que podían usarse
          tanto en móviles como en ordenadores. También había demanda de
          realizar aplicaciones de escritorio multiplataforma, y en 2013 nace{" "}
          <strong>Electron</strong> (Visual Studio Code o Spotify corren en{" "}
          Electron) que permite desarrollar aplicaciones gráficas de escritorio
          para cualquier plataforma de escritorio.
        </p>
        <p>
          Javascript ha tenido altibajos, y ha habido muchos cambios, por suerte
          cada año sale una nueva especificación de ECMA, donde se añaden nuevas
          funcionalidades al lenguaje o se añaden mejoras. Es un lenguaje que se
          ha hecho <strong>muy popular</strong> y que ahora en la actualidad
          tiene mucha demanda gracias a su rico ecosistema de frameworks y de
          librerías.
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/conociendo-javascript/meme-javascript.png"
            width="500"
            height="750"
            alt="Meme JavaScript"
            loading="lazy"
          />
        </div>
        <h2 className={styles.subtitle_block}>
          <Link href="#">
            <a id="ecmascript" className={styles.link_off}>
              ECMAScript (ES)
            </a>
          </Link>
        </h2>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/conociendo-javascript/es-ecmascript-logo.jpeg"
            width="200"
            height="200"
            alt="Logo EcmaScript"
            loading="lazy"
          />
        </div>
        <p>
          Cuando hablamos de <strong>ECMAScript (ES)</strong> hablamos de
          JavaScript, pero hablamos de una <strong>especificación</strong>, que
          nos dice como debe de <strong>funcionar y comportarse</strong> el
          lenguaje. De esta manera, todos los navegadores pueden hacer funcionar
          un código JavaScript del mismo modo. Aún así, puede haber partes de
          una especificación que no ha sido implementado en algún navegador y
          muchas veces tenemos que tener cuidado en implementar especificaciones
          muy recientes.
        </p>
        <p>
          Como hemos mencionado anteriormente en la historia de los navegadores
          y JavaScript, han salido distintas versiones de EcmaScript. Vamos a{" "}
          <strong>enumerarlos</strong> y ver como apodan a cada versión, así
          veremos, que no coincide con los años de salida (cuidado con esto).
        </p>
        <h3
          className={`${styles.subsection_block} ${styles.bold_title} ${styles.margin_top}`}
        >
          Versiones de ECMAScript
        </h3>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Edición</th>
              <th>Publicación</th>
              <th>Nombre / apodo</th>
              <th>Cambios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jun. 1997</td>
              <td>
                ECMAScript 1997 / <strong>(ES1)</strong>
              </td>
              <td>Primera edición</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jun. 1998</td>
              <td>
                ECMAScript 1998 / <strong>(ES2)</strong>
              </td>
              <td>Alineación con el estándara internacional ISO/IEC 16262</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dic. 1999</td>
              <td>
                ECMAScript 1999 / <strong>(ES3)</strong>
              </td>
              <td>
                Expresiones regulares, mejora de manejo de strings, try/catch...
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Abandonado</td>
              <td></td>
              <td>
                Abandonada por falta de acuerdo debido a diferencias políticas
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Dic. 2009</td>
              <td>
                ECMAScript 2009 / <strong>(ES5)</strong>
              </td>
              <td>
                Modo estricto, comprobación de errores, getters/setters, JSON...
              </td>
            </tr>
            <tr>
              <td>5.1</td>
              <td>Jun. 2011</td>
              <td>
                ECMAScript 2011 / <strong>(ES5.1)</strong>
              </td>
              <td>
                Alineación con el estándar internacional ISO/IEC 16262:2011
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Después del último estándar de diciembre de 2011, los siguientes que
          se lanzan, van a <strong>marcar un antes y un después</strong> en el
          lenguaje. Se va a convertir en un lenguaje más moderno, y desde ese
          momento hasta hoy, cada año se lanza una nueva especificación.
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Edición</th>
              <th>Fecha</th>
              <th>Nombre / apodo</th>
              <th>Cambios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6</td>
              <td>Jun. 2015</td>
              <td>
                ECMAScript 2015 / <strong>(ES6 o ES2015)</strong>
              </td>
              <td>
                Clases, módulos, iteradores for / of, generadores, funciones de
                dirección, datos binarios, colecciones, proxies... es conocida
                también como "ES6 Harmony"
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Jun. 2016</td>
              <td>
                ECMAScript 2016 / <strong>(ES7 o ES2016)</strong>
              </td>
              <td>
                Actualización pequeña de la versión 6, incorpora:
                Array.prototype.includes(), operador exponencial (**)
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Jun. 2017</td>
              <td>
                ECMAScript 2017 / <strong>(ES8 o ES2017)</strong>
              </td>
              <td>Async / await</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Jun. 2018</td>
              <td>
                ECMAScript 2018 / <strong>(ES9 o ES2018)</strong>
              </td>
              <td>
                Rest / Spread operator para variables (...),
                Promise.prototype.finally(), iteración asíncrona
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Jun. 2019</td>
              <td>
                ECMAScript 2019 / <strong>(ES10 o ES2019)</strong>
              </td>
              <td>
                Array.flat(), Array.flatMap(), String.trimStart(),
                String.trimEnd, errores opcionales de bloque con catch...
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Jun. 2020</td>
              <td>
                ECMAScript 2020 / <strong>(ES11 o ES2020)</strong>
              </td>
              <td>
                BigInt, operador de unión nula, encadenamiento opcional
                (optional chaining ?) y el objeto globalThis
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          De esta manera podemos ver que el cambio más radical fue la edición 6
          (ES6), donde JavaScript dio <strong>un gran cambio</strong>. A día de
          hoy, muchas de las cosas lanzadas en esa edición, las usamos en
          nuestro día a día, <strong>nos facilita la vida</strong> a la hora de
          programar. A veces entre versión y versión, van adelantando una alguna
          funcionalidad para ir probando, y muchas de ellas llegan a
          implementarse. Para ver que funcionalidades hay en cada navegador,
          podemos consultar la{" "}
          <Link href="http://kangax.github.io/compat-table/es5/">
            <a className={styles.link_underline} target="_blank">
              tabla de compatibilidad Kangax
            </a>
          </Link>
          .
        </p>
        <p>
          Con todo esto, nos puede sugerir una pregunta, ¿qué funcionalidades
          uso?, ¿debo usar la última?, ¿cual es la recomendable?.
        </p>
        <h3
          className={`${styles.subsection_block} ${styles.bold_title} ${styles.margin_top}`}
        >
          <Link href="#">
            <a id="que-version-ecmascript-uso" className={styles.link_off}>
              ¿Qué versión de ECMAScript uso?
            </a>
          </Link>
        </h3>
        <p>
          Hemos visto anteriormente que si usamos una funcionalidad en concreto,
          a lo mejor nuestro código no podría ser interpretado bien por el
          navegador. Por lo general se suele usar usar como referencia{" "}
          <strong>ES6 / ES2016</strong>, pero podríamos perder muchas
          funcionalidades por el camino, ¿qué hacemos?.
        </p>
        <p>
          Tenemos varias estrategias para asegurarnos que nuestro código
          funcione correctamente en todos los navegadores:
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Estrategia</th>
              <th>Versión de ES</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Conservadora</strong>
              </td>
              <td>ECMAScript 5</td>
              <td>
                Es una versión bastante antigua, y lo bueno es que tiene soporte
                para todos los navegadores de forma nativa, es una versión
                "segura", pero perdemos ventajas con nuevas funcionalidades.
                Internet Explorer es compatible con esta versión, con eso lo
                decimos todo.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Delegadora</strong>
              </td>
              <td>
                <em>Según librería o framework</em>
              </td>
              <td>
                Nuestra herramienta elige por nosotros que versión utilizar,
                esta es una forma cómdoda y rápida de ahorrarnos dolores de
                cabeza. Pero también cremos una dependencia a esta herramienta y
                podemos heredar como cosas buenas como cosas malas.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Evergreen</strong>
              </td>
              <td>ECMAScript 6+</td>
              <td>
                Muy nuevo, no garantiza la compatibilidad para los navegadores
                antiguos. Es una estrategia que se enfoca sólo desarrollar para
                las últimas versiones de los navegadores como{" "}
                <strong>Google Chrome</strong> o{" "}
                <strong>Mozilla Firefox</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Transpiladora</strong>
              </td>
              <td>ECMAScript 6+</td>
              <td>
                Utilizamos un transpilador como <strong>Babel</strong> para dar
                soporte de las nuevas funcionalidades en los nuevos navegadores.
                Babel traduce todo el código nuevo y lo adapta al código
                antiguo.
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
}
