import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";
import Image from "next/image";

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
        <h2 className={styles.subtitle_block}>Un poco de historia</h2>
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
            src="/images/temario/conociendo-javascript/worldwideweb.gif"
            width="1100"
            height="664"
            alt="Captura de pantalla de WorldWideWeb de 1993"
            loading="lazy"
          />
        </div>
        <p>
          En diciembre de 1991 en Estados Unidos aprueba la{" "}
          <strong>ley de computación de alto desempeño</strong>, donde inyecta
          capital para extender y se modernizar todo lo relacionado con el
          estándar WWW (World Wide Web). Gracias a ello, nacen proyectos como{" "}
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
          de JavaScript pero empezamos a tener algo parecido al actual DOM
          (representación de una estructura de nodos de un documento HTML, XHTML
          y XML). Las páginas web eran muy estáticas, y buscaban una solución
          para darle dinamismo a las páginas web. La primera solución que
          encontraron era JAVA, pero se dieron cuenta que no se adaptaba muy
          bien en el contexto de navegación web.
        </p>

        <p>
          En abril de 1995 Netscape contrató a <strong>Brendan Eich</strong>, se
          le dió la tarea de crear un prototipo funcional de un lenguaje de
          programación que se ejecutara en el navegador, que se pareciera a JAVA
          y que sólo iba a tener... <strong>10 días</strong> para desarrollarlo.
          Es una proeza hacer algo así en este periodo de tiempo, y así podemos
          entender como JavaScript es un lenguaje un poco "especial".
        </p>
        <p>
          En tan breve periodo, a Brendan no le daba tiempo a realizar un
          lenguaje tan complejo y completo como JAVA, pero si que pudo hacer una
          herramienta flexible y moldeable al gusto del programador. Su sintáxis
          se parece a JAVA (llaves, paréntesis, puntos y comas...) y coge cosas
          de otros lenguajes de programación, como el tipado dinámico de Lisp o
          la herencia basada en prototipos de Self.
        </p>
        <p>
          Al principio JavaScript se llamaba Mocha, que posteriormente fue
          renombrado a LiveScript por septiembre de 1995, para que finalmente se
          quedase con el nombre de JavaScript a finales de 1995. En este último
          cambio, es cuando ya se empieza implementar JavaScript en el navegador
          Netscape, ha nacido un lenguaje.
        </p>
        <p>
          Microsoft saca una versión propia de JavaScript llamada JScript en
          agosto de 1996, implementándolo a Internet Explorer. Eran versiones
          completamente compatibles (Netscape y IE), pero se tenía miedo a que
          cada uno hiciera un lenguaje totalmente diferente. Gracias a ello en
          1996 nace el W3C (World Wide Web Consortium) y crea el estándar del
          DOM. Por su parte ECMA crea el primer estándar en junio de 1997 para
          JavaScript, llamado ECMA-262 o también llamada ECMAScript. En junio de
          1998 sale la versión 2 (ES2) de la especificación y en diciembre de
          1999 sale la versión 3 (ES3), con: expresiones regulares, mejora de
          manejo de strings, try/catch, etc.
        </p>
        <p>
          JavaScript ya empieza a estar estandarizado y saca músculo, pero
          comienza un declive en el mundo tecnológico que afectara al lenguaje.
        </p>
        <p>
          A partir del 2000 en Estados Unidos, a causa de los atentados del 11S,
          se cambian las políticas de priorizar el desarrollo de nuevas
          tecnologías y por eso muchas empresas tecnológicas (las llamadas .com)
          quiebran o son adquiridas por otras. Netscape fue adquirida por AOL, y
          esto le da mucho peso a Microsoft con su navegador Internet Explorer,
          haciéndose dueño del mercado y sin ninguna oposición de otra empresa.
        </p>
        <p>
          En 2001 se tenía que lanzar la versión ECMAScript 4 (ES4), pero debido
          a diferencias políticas en la complejidad del lenguaje, Yahoo y
          Microsoft deciden abandonar la nueva edición. Se intenta hacer una
          versión ES3.1 para mejorar el lenguaje, pero realmente no llega nunca.
        </p>
        <p>
          Despues de está época, Windows instala Internet Explorer en su sistema
          operativo por defecto, y se hace con un 92% del mercado. Haciendo
          abuso del nicho de mercado, Microsoft empieza a hacer JavaScript bajo
          sus propias reglas, sin llegar a consensos con nadie más. El resto de
          fabricantes hacían lo que querían: unos seguían a Microsoft, otros
          seguían a ECMA y otros hacían sus aportes propios, llega el caos a los
          desarrolladores.
        </p>
        <p>
          Las conexiones a internet mejoran y estaba el problema de incorporar
          contenido multimedia a las páginas web. Todo el mundo hacía lo que
          quería y bajo ese contexto, nace Flash, nos brindaba una solución para
          poder ver vídeos o escuchar audios. Era una tecnología pesada y con
          muchos problemas.
        </p>
        <p>
          En agosto de 2006 nace JQuery a manos John Resig, una biblioteca de
          JavaScript que intentaba unificar el uso de JavaScript de una manera
          más fácil, pero lejos de ello, es una biblioteca que en la actualidad
          no tiene mucho sentido. Con esta biblioteca modificamos el DOM y
          simplifica la sintáxis de uso para buscar, seleccionar o manipular
          cualquier elemento del DOM. Los principios de JQuery son: separación
          de JavaScript y HTML, brevedad y claridad, eliminación de
          incompatibilidad entre navegadores y extensibilidad.
        </p>
        <p>
          Google en septiembre de 2008 lanza su propio navegador web, llamado
          Google Chrome. Chrome crea un motor de código abierto para JavaScript
          y WebAssembly. Gracias a esta creación, va a abrir un nuevo camino
          para que JavaScript tome el peso que se merece y vuelva a ser un
          lenguaje relevante dentro del mundo del desarrollo.
        </p>
        <p>
          En mayo de 2009 el mundo de JavaScript empieza a tener una gran
          revolución: JavaScript siempre se había ejecutado en el navegador,
          pero ahora habían logrado (hubo otros intentos sin mucho éxito)
          ejecutarlo fuera del navegador, usando el exitoso motor de Google
          Chrome V8. Gracias a esto nace NodeJS de la mano de Ryan Dahl,
          podíamos correr JavaScript donde quisiéramos.
        </p>
        <p>
          También en esta época en diciembre de 2009, nace por fin otro nuevo
          estándar de ECMAScript la ES5, había pasado ya casi 10 años sin un
          estándar y se había implementado cosas que se habían pensado para la
          famosa ES3.1.
        </p>
        <p>
          Gracias a esta revolución, empiezan a salir en 2010 librerías o
          frameworks para JavaScript, como son AngularJS o BackboneJS. Empiezan
          a nacer las llamadas SPA (Single Page Application), aplicaciones web
          donde todas las pantallas las muestra la misma página, sin recarga
          alguna del navegador.
        </p>
        <p>
          Tras estas primeras librerías o frameworks, nacen muchos más, y nacen
          como "setas". En mayo de 2013 nace ReactJS de la mano de Jordan Walke,
          trabajador de Facebook, y en febrero del 2014 Evan You, un ex
          trabajador de Google libera una librería llamada VueJS.
        </p>
        <p>
          Tras este boom de librerías y frameworks, hubo una gran demanda de
          realizar aplicaciones para móviles y de ahí nació PhoneGap y también
          Ionic. Estas dos corrían JavaScript y hacían aplicaciones híbridas,
          que podían usarse tanto en móviles como en ordenadores. También había
          demanda de realizar aplicaciones de escritorio multiplataforma, y en
          2013 nace Electron (Visual Studio Code o Spotify corren en Electron)
          que permite desarrollar aplicaciones gráficas de escritorio para
          cualquier plataforma de escritorio.
        </p>
        <p>
          Javascript ha tenido altibajos, y han habido muchos cambios, por
          suerte cada año sale una nueva especificación de ECMA, donde se añaden
          nuevas funcionalidades al lenguaje o se añaden mejoras. Es un lenguaje
          que se ha hecho muy popular y que ahora en la actualidad tiene mucha
          demanda.
        </p>
        <h2 className={styles.subtitle_block}>ECMAScript</h2>
        <p>
          Cuando hablamos de <strong>ECMAScript</strong> siempre hablamos de
          JavaScript, es un estándar para unificar el lenguaje en todos los
          navegadores, así pues Firefox y Chrome puedan ejecutar JavaScript de
          la misma manera.
        </p>
        <h3 className={styles.subtitle_block}>Subtítulo</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h4 className={styles.subsection_block}>Subsección</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>
      <div>FUENTES: https://www.youtube.com/watch?v=0b7wyn9UWpE</div>
    </div>
  );
}
