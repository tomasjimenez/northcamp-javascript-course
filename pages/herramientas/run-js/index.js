import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";

export default function RunJS() {
  return (
    <ModuleBlock
      ComponentToRender={<HerramientasRunJS />}
      back={{ title: "Temario", link: "/" }}
    ></ModuleBlock>
  );
}

function HerramientasRunJS() {
  return (
    <div className={styles.container}>
      <article>
        <h2 className={styles.title_block}>RunJS</h2>
        <img
          src="/images/herramientas/runjs/runjs-logo.png"
          style={{
            width: "100%",
            maxWidth: "200px",

            display: "block",
            margin: "30px auto",
          }}
          alt="Logo RunJS"
        />
        <p>
          <strong>RunJS</strong> es una aplicación que podemos{" "}
          <strong>ejecutar código</strong> y verlo en el momento en JavaScript y
          TypeScript. Ejecuta el código tal como está escrito y muestra los
          resultados formateados en el panel de salida de la derecha.
        </p>
        <img
          src="/images/herramientas/runjs/runjs-screen.png"
          style={{
            display: "block",
            maxWidth: "600px",
            margin: "20px auto",
          }}
          alt="Screenshot RunJS"
        />
        <p>
          <strong>RunJS</strong> no requiere ninguna configuración para su uso,
          pero es altamente configurable con sus diferentes opciones. Las
          opciones, junto con las diversas capacidades de RunJS.
        </p>
        <h3 className={styles.subtitle_block}>Instalación</h3>
        <p>
          Para instalar <strong>RunJS</strong>, debemos de acceder a este{" "}
          <a href="https://runjs.app/#platforms" target="_blank">
            <span style={{ textDecoration: "underline" }}>enlace</span>
          </a>
          . Una vez en la página, descargamos la versión de nuestro sistema
          operativo y lo ejecutamos.
        </p>
        <p>
          Con esto, ya tendríamos instalado <strong>RunJS</strong> en nuestro
          equipo.
        </p>
      </article>
    </div>
  );
}
