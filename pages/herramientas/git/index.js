import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";

export default function Git() {
  return (
    <ModuleBlock
      ComponentToRender={<HerramientasGit />}
      back={{ title: "Temario", link: "/" }}
    ></ModuleBlock>
  );
}

function HerramientasGit() {
  return (
    <div className={styles.container}>
      <article>
        <h2 className={styles.title_block}>Git</h2>
        <div className={styles.img_center}>
          <Image
            src="/images/herramientas/git/git-logo.png"
            width="300"
            height="120"
            alt="Logo Git"
            loading="lazy"
          />
        </div>
        <p>
          <strong>Git</strong> es un software de control de versiones diseñado
          por <strong>Linus Torvalds</strong> (el padre del Kernel de Linux),
          pensando en la eficiencia, la confiabilidad y compatibilidad del
          mantenimiento de versiones de aplicaciones cuando estas tienen un gran
          número de archivos de código fuente. Su propósito es llevar registro
          de los cambios en archivos de ordenador incluyendo coordinar el
          trabajo que varias personas realizan sobre archivos compartidos en un
          repositorio de código.
        </p>
        <p>
          Al principio, Git se pensó como un motor de bajo nivel sobre el cual
          otros pudieran escribir la interfaz de usuario o front end como Cogito
          o StGIT. ​Sin embargo, Git se ha convertido desde entonces en un{" "}
          <strong>
            sistema de control de versiones con funcionalidad plena
          </strong>
          . ​Hay algunos proyectos de mucha relevancia que ya usan Git, en
          particular, el grupo de programación del núcleo Linux.
        </p>
        <p>
          El mantenimiento del software Git está actualmente (2009) supervisado
          por <strong>Junio Hamano</strong>, quien recibe contribuciones al
          código de alrededor de 280 programadores. En cuanto a derechos de
          autor Git es un software libre distribuible bajo los términos de la
          versión 2 de la Licencia Pública General de GNU.
        </p>
        <h3 className={styles.subtitle_block}>🚀 Instalación</h3>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          🪟 Windows
        </h4>
        <p>
          Para <strong>instalar Git</strong> en Windows, es tan simple como ir a
          la página oficial de Git, a través de este{" "}
          <Link href="https://git-scm.com/">
            <a className={styles.link_underline} target="_blank">
              enlace
            </a>
          </Link>
          . Una vez descargado, lo ejecutaremos y seguiremos la instrucciones.
          Muy recomendable instalar la consola de Git, y utilizar desde ahí{" "}
          <strong>Git</strong>.
          <div className={styles.img_center}>
            <Image
              src="/images/herramientas/git/git-download.jpeg"
              width="1000"
              height="880"
              alt="Screenshot instalar Git en Windows"
              loading="lazy"
            />
          </div>
        </p>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          🍎 Mac
        </h4>
        Enhorabuena, si posees un mac, ya tienes instalado <strong>Git</strong>{" "}
        por defecto en tu terminal 🥳.
      </article>
    </div>
  );
}
