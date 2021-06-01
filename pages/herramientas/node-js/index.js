import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";

export default function NodeJS() {
  return (
    <ModuleBlock
      ComponentToRender={<HerramientasNodeJS />}
      back={{ title: "Temario", link: "/" }}
    ></ModuleBlock>
  );
}

function HerramientasNodeJS() {
  return (
    <div className={styles.container}>
      <article>
        <h2 className={styles.title_block}>NodeJS</h2>
        <img
          src="/images/herramientas/nodejs/nodejs-logo.png"
          width="200"
          height="200"
          style={{
            width: "100%",
            maxWidth: "400px",

            display: "block",
            margin: "30px auto",
          }}
          alt="Logo NodeJS"
        />
        <p>
          <strong>Node.js</strong> es un entorno en tiempo de ejecución
          multiplataforma, de código abierto, para la capa del servidor (pero no
          limitándose a ello) basado en el lenguaje de programación{" "}
          <strong>JavaScript</strong>, asíncrono, con E/S de datos en una
          arquitectura orientada a eventos y basado en el{" "}
          <strong>motor V8 de Google</strong>. Fue creado con el enfoque de ser
          útil en la creación de programas de red altamente escalables, como por
          ejemplo, <strong>servidores web</strong>. Fue creado por{" "}
          <strong>Ryan Dahl</strong> en 2009 y su evolución está apadrinada por
          la empresa Joyent, que además tiene contratado a Dahl en plantilla.​
        </p>
        <p>
          Tanto JavaScript como Node.js se ejecutan en el motor de tiempo de
          ejecución JavaScript V8 (V8 es el nombre del motor de JavaScript que
          alimenta Google Chrome. Es lo que toma nuestro JavaScript y lo ejecuta
          mientras navega con Chrome). Este motor coge el código JavaScript y lo
          convierte en un código de máquina más rápido. El código de máquina es
          un código de nivel más bajo que el ordenador puede ejecutar sin
          necesidad de interpretarlo primero, ignorando la compilación y por lo
          tanto aumentando su velocidad
        </p>

        <h3 className={styles.subtitle_block}>Instalación</h3>
        <h4 className={`${styles.subsection_block} ${styles.with_icon}`}>
          🪟 Windows
        </h4>
        <p>
          Para <strong>instalar NodeJS</strong> debemos de irnos a su web de
          descarga a través de este{" "}
          <a href="https://nodejs.org/es/" target="_blank">
            <span style={{ textDecoration: "underline" }}>enlace</span>
          </a>
          .
        </p>
        <p>
          Una vez dentro de la página de descarga, debemos de elegir la versión
          <strong> LTS</strong> (Long Term Support). La otra versión, nos podría
          dar problemas al tener nuevas características que no está soportadas
          aún por la gran mayoría.
        </p>
        <img
          src="/images/herramientas/nodejs/nodejs-download.png"
          style={{
            maxWidth: "800px",
            display: "block",
            margin: "30px auto",
          }}
          alt="Screenshot de descarga NodeJS"
        />
        <h4 className={`${styles.subsection_block} ${styles.with_icon}`}>
          🍎 Mac
        </h4>
        <p>
          Quienes posean un mac, la forma más rápida de instalar{" "}
          <strong>NodeJS</strong>, es a través de la herramienta de{" "}
          <strong>Homebrew</strong>. Podéis seguir las instrucciones para
          instalar Homebrew en su web, en el siguiente{" "}
          <a href="https://brew.sh/index_es.html" target="_blank">
            <span style={{ textDecoration: "underline" }}>enlace</span>
          </a>
          .
        </p>
        <img
          src="/images/herramientas/nodejs/nodejs-homebrew.png"
          style={{
            maxWidth: "800px",
            display: "block",
            margin: "30px auto",
          }}
          alt="Screenshot instalar Homebrew en mac"
        />
        <p>
          Una vez instalado <strong>Homebrew</strong>, sólo tendremos que irnos
          a nuestra terminal y poner "brew install node". Una vez ejecutado este
          comando, tendremos ya instalado <strong>NodeJS</strong> en nuestro
          mac.
        </p>
      </article>
    </div>
  );
}
