import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";

export default function VisualStudioCode() {
  return (
    <ModuleBlock
      ComponentToRender={<HerramientasVisualStudioCode />}
      back={{ title: "Temario", link: "/" }}
    ></ModuleBlock>
  );
}

function HerramientasVisualStudioCode() {
  return (
    <div className={styles.container}>
      <article>
        <h2 className={styles.title_block}>Visual Studio Code</h2>
        <div className={styles.img_center}>
          <Image
            src="/images/herramientas/vscode/vscode.webp"
            width="200"
            height="200"
            alt="Logo Visual Studio Code"
            loading="lazy"
          />
        </div>
        <p>
          <strong>Visual Studio Code</strong> es un editor de código fuente
          desarrollado por Microsoft para Windows, Linux y macOS. Incluye
          soporte para la depuración, control integrado de Git, resaltado de
          sintaxis, finalización inteligente de código, fragmentos y
          refactorización de código. También es personalizable, por lo que los
          usuarios pueden cambiar el tema del editor, los atajos de teclado y
          las preferencias. Es gratuito y de código abierto, aunque la descarga
          oficial está bajo software privativo e incluye características
          personalizadas por Microsoft.
        </p>
        <p>
          Visual Studio Code se basa en <strong>Electron</strong>, un framework
          que se utiliza para implementar Chromium y Node.js como aplicaciones
          para escritorio, que se ejecuta en el motor de diseño Blink. Aunque
          utiliza el framework Electron, el software no usa Atom y en su lugar
          emplea el mismo componente editor (Monaco) utilizado en Visual Studio
          Team Services (anteriormente llamado Visual Studio Online)
        </p>
        <h3 className={styles.subtitle_block}>Características</h3>
        <p>
          Visual Studio Code es un editor de código fuente. Es compatible con
          varios lenguajes de programación. Muchas de las características de
          Visual Studio Code no están expuestas a través de los menús o la
          interfaz de usuario. Más bien, se accede a través de la paleta de
          comandos o a través de archivos .json (por ejemplo, preferencias del
          usuario). La paleta de comandos es una interfaz de línea de comandos.
          Sin embargo, desaparece si el usuario hace clic fuera de él o presiona
          una combinación de teclas en el teclado para interactuar con algo que
          está fuera de él. Esto también se aplica a los comandos que requieren
          mucho tiempo. Cuando esto sucede, el comando en progreso se cancela.
        </p>
        <p>
          En el rol de editor de código fuente, Visual Studio Code permite
          cambiar la página de códigos en la que se guarda el documento activo,
          el carácter que identifica el salto de línea (una opción entre LF y
          CRLF) y el lenguaje de programación del documento activo.
        </p>
        <h3 className={styles.subtitle_block}>Instalación</h3>
        <p>
          Para instalar <strong>Visual Studio Code</strong>, debemos de acceder
          a este{" "}
          <Link href="https://code.visualstudio.com/download">
            <a style={{ textDecoration: "underline" }} target="_blank">
              enlace
            </a>
          </Link>
          {""}, y descargar el enlace correspondiente a tu sistema operativo.
        </p>
        <div className={styles.img_center}>
          <Image
            src="/images/herramientas/vscode/vscode-download.png"
            width="850"
            height="500"
            alt="Screenshot descarga Visual Studio Code"
            loading="lazy"
          />
        </div>
        <h3 className={styles.subtitle_block}>Extensiones recomendadas</h3>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          <div
            className={`${styles.img_center} ${styles.img_vscode_extension}`}
          >
            <Image
              src="/images/herramientas/vscode/document-this-logo.jpeg"
              width="60"
              height="60"
              alt="Logo extension Visual Studio Code Document This"
              loading="lazy"
            />
          </div>
          Document This
        </h4>
        <p>
          Genera automáticamente comentarios JSDoc detallados para archivos
          TypeScript y JavaScript. Es muy útil junto a JSDoc, porque podemos
          autogenerar documentación y hasta si sabemos utilizarlo bien, puede
          valernos para la validación de tipos de datos sin usar TypeScript.
        </p>
        <div className={`${styles.img_center}`}>
          <Image
            src="/images/herramientas/vscode/document-this.gif"
            width="800"
            height="500"
            alt="Uso de Document This"
            loading="lazy"
          />
        </div>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          <div
            className={`${styles.img_center} ${styles.img_vscode_extension}`}
          >
            <Image
              src="/images/herramientas/vscode/auto-close-tag.jpeg"
              width="60"
              height="60"
              alt="Logo extension Visual Studio Code Document This"
              loading="lazy"
            />
          </div>
          Auto Close Tag
        </h4>
        <p>
          Cuando abres una etiqueta, muchas veces tienes que escribir su cierre.
          Con esta extensión vas a conseguir de una forma automática cerrar tus
          tags de HTML o etiquetas de WebComponents.
        </p>
        <div className={`${styles.img_center}`}>
          <Image
            src="/images/herramientas/vscode/auto-close-tag.gif"
            width="800"
            height="500"
            alt="Caso de uso Auto Close Tag extension Visual Studio Code"
            loading="lazy"
          />
        </div>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          <div
            className={`${styles.img_center} ${styles.img_vscode_extension}`}
          >
            <Image
              src="/images/herramientas/vscode/bracket-pair-colorizer.jpeg"
              width="60"
              height="60"
              alt="Logo extension Visual Studio Code Bracket Pair Colorizer"
              loading="lazy"
            />
          </div>
          Bracket Pair Colorizer
        </h4>
        <p>
          Muchas veces cuando escribimos código, tenemos que anidar llaves "
          {"{ }"}" o paréntesis "( )". Esta extensión pone color a estas
          anidaciones, así podemos saber en todo momento a quién corresponde esa
          anidación.
        </p>
        <div className={`${styles.img_center}`}>
          <Image
            src="/images/herramientas/vscode/bracket-pair-colorizer.png"
            width="800"
            height="140"
            alt="Caso de uso extensión Visual Studio Code Bracket Pair Colorizer"
            loading="lazy"
          />
        </div>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          <div
            className={`${styles.img_center} ${styles.img_vscode_extension}`}
          >
            <Image
              src="/images/herramientas/vscode/path-intellisense.png"
              width="60"
              height="60"
              alt="Logo extension Visual Studio Code Path Intellisense"
              loading="lazy"
            />
          </div>
          Path Intelisense
        </h4>
        <p>
          Cuando tienes que importar un modulo de JavaScript, necesitas poner su
          ruta, y esta extensión te ayuda a completar la ruta.
        </p>
        Caso de uso extensión Visual Studio Code Bracket Pair Colorizer"
        <div className={`${styles.img_center}`}>
          <Image
            src="/images/herramientas/vscode/path-intellisense.gif"
            width="700"
            height="400"
            alt="Caso de uso de la extensión de Visual Studio Code Path Intellisense"
            loading="lazy"
          />
        </div>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          <div
            className={`${styles.img_center} ${styles.img_vscode_extension}`}
          >
            <Image
              src="/images/herramientas/vscode/indent-rainbow.jpeg"
              width="60"
              height="60"
              alt="Logo extension Visual Studio Code Indent Rainbow"
              loading="lazy"
            />
          </div>
          Indent Rainbow
        </h4>
        <p>
          Cuando programamos tenemos que tabular para diferenciar que estamos
          dentro de un scope o un bloque. Con esta extensión, cada bloque de
          código aparecerá con un color en cada línea.
        </p>
        <div className={`${styles.img_center}`}>
          <Image
            src="/images/herramientas/vscode/indent-rainbow.png"
            width="300"
            height="350"
            alt="Caso de uso de la extensión de Visual Studio Code Indent Rainbow"
            loading="lazy"
          />
        </div>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          <div
            className={`${styles.img_center} ${styles.img_vscode_extension}`}
          >
            <Image
              src="/images/herramientas/vscode/prettier.jpeg"
              width="60"
              height="60"
              alt="Logo extension Visual Studio Code Prettier"
              loading="lazy"
            />
          </div>
          Prettier
        </h4>
        <p>
          Formateador de código estricto. Aplica un estilo coherente analizando
          tu código y siempre todo tu equipo tendrá el mismo estilo de código.
        </p>
        <h4
          className={`${styles.subsection_block} ${styles.with_icon} ${styles.bold_title}`}
        >
          <div
            className={`${styles.img_center} ${styles.img_vscode_extension}`}
          >
            <Image
              src="/images/herramientas/vscode/live-share.png"
              width="60"
              height="60"
              alt="Logo extension Visual Studio Code Live Share"
              loading="lazy"
            />
          </div>
          Live Share
        </h4>
        <p>
          Formateador de código estricto. Aplica un estilo coherente analizando
          tu código y siempre todo tu equipo tendrá el mismo estilo de código.
        </p>
        <div className={`${styles.img_center}`}>
          <Image
            src="/images/herramientas/vscode/live-share-screenshot.png"
            width="300"
            height="120"
            alt="Caso de uso de la extensión de Visual Studio Code Live Share"
            loading="lazy"
          />
        </div>
      </article>
    </div>
  );
}
