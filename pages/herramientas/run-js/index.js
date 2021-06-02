import Image from "next/image";
import Link from "next/link";
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
        <div className={styles.img_center}>
          <Image
            src="/images/herramientas/runjs/runjs-logo.png"
            width="200"
            height="200"
            alt="Logo RunJS"
            loading="lazy"
          />
        </div>
        <p>
          <strong>RunJS</strong> es una aplicación que podemos{" "}
          <strong>ejecutar código</strong> y verlo en el momento en JavaScript y
          TypeScript. Ejecuta el código tal como está escrito y muestra los
          resultados formateados en el panel de salida de la derecha.
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/herramientas/runjs/runjs-screen.jpeg"
            width="600"
            height="400"
            alt="Screenshot RunJS"
            loading="lazy"
          />
        </div>
        <p>
          <strong>RunJS</strong> no requiere ninguna configuración para su uso,
          pero es altamente configurable con sus diferentes opciones. Las
          opciones, junto con las diversas capacidades de RunJS.
        </p>
        <h3 className={styles.subtitle_block}>🚀 Instalación</h3>
        <p>
          Para instalar <strong>RunJS</strong>, debemos de acceder a este{" "}
          <Link href="https://runjs.app/#platforms">
            <a className={styles.link_underline} target="_blank">
              enlace
            </a>
          </Link>
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
