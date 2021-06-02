import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/modules/ModuleHome.module.scss";

export default function ModuleHome() {
  return (
    <div className={styles.container}>
      <div className={styles.left_column}>
        <div className={styles.details_course}>
          <h3 className={styles.course_title}>Docente</h3>
          <div className={`${styles.profile_photo} ${styles.img_center}`}>
            <Image
              src="/images/ficha/mrcodedev.jpg"
              alt="José Luis García Abad"
              width="200"
              height="200"
            />
          </div>
          <div className={styles.profile_name}>José Luis García Abad</div>
          <div className={styles.position}>Frontend Developer en Altafonte</div>
        </div>
        <div className={styles.details_course}>
          <h3 className={styles.course_title}>Contacto</h3>
          <div className={styles.teacher_data}>
            <div className={styles.teacher_data_section}>Correo</div>
            <div className={styles.teacher_data}>mrcodedev@gmail.com</div>
          </div>
          <div className={styles.teacher_data}>
            <div className={styles.teacher_data_section}>Teléfono</div>
            <div className={styles.teacher_data}>699 10 36 87</div>
          </div>
          <div className={styles.teacher_data}>
            <div className={styles.teacher_data_section}>Telegram</div>
            <div className={styles.teacher_data}>@MrCodeDev</div>
          </div>
          <div className={styles.teacher_data}>
            <div className={styles.teacher_data_section}>Twitter</div>
            <div className={styles.teacher_data}>@MrCodeDev</div>
          </div>
        </div>
        <div className={styles.details_course}>
          <h3 className={styles.course_title}>Herramientas</h3>
          <div className={styles.app_tools}>
            <Link href="/herramientas/visual-studio-code/">
              <a className={styles.link_underline}>Visual Studio Code</a>
            </Link>
          </div>
          <div className={styles.app_tools}>
            <Link href="/herramientas/node-js/">
              <a className={styles.link_underline}>NodeJS</a>
            </Link>
          </div>
          <div className={styles.app_tools}>
            <Link href="/herramientas/git/">
              <a className={styles.link_underline}>Git</a>
            </Link>
          </div>
          <div className={styles.app_tools}>
            <Link href="/herramientas/run-js/">
              <a className={styles.link_underline}>RunJS</a>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.right_column}>
        <h2 className={styles.title_section}>Temario</h2>
        <div className={styles.temary}>
          <ol>
            <li>
              <Link href="/temario/conociendo-javascript">
                Conociendo JavaScript
              </Link>
              <ul>
                <li>
                  <Link href="/temario/conociendo-javascript/#un-poco-de-historia">
                    Un poco de historia
                  </Link>
                </li>
                <li>
                  <Link href="/temario/conociendo-javascript#ecmascript">
                    ECMAScript (ES)
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/temario/conociendo-javascript#que-version-ecmascript-uso">
                    ¿Qué versión de ECMAScript uso?
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/temario/chrome-y-consola/">
                Chrome y la consola: tus aliados
              </Link>
            </li>
            <li>
              <Link href="/temario/agregando-javascript-en-html/">
                Agregando JavaScript en HTML
              </Link>
              <ul>
                <li>Estrategias de carga de JavaScript</li>
              </ul>
            </li>
            <li>
              <Link href="/temario/variables/">Variables</Link>
              <ul>
                <li>Tipos de Variables</li>
                <li>Nomenclaturas</li>
              </ul>
            </li>
            <li>
              <Link href="/temario/tipos-de-datos/">Tipos de datos</Link>
            </li>
            <li>
              <Link href="/temario/comentarios-en-codigo/">
                Comentarios en el código
              </Link>
              <ul>
                <li>Consejos a la hora de poner comentarios</li>
              </ul>
            </li>
            <li>
              <Link href="/temario/operadores-aritmeticos/">
                Operadores aritméticos
              </Link>
            </li>
            <li>
              <Link href="/temario/coercion/">
                Coerción: la cosa se pone interesante
              </Link>
            </li>
            <li>
              <Link href="/temario/hoisting/">
                ¿Qué diablos es el hoisting?
              </Link>
            </li>
            <li>
              <Link href="/temario/jugando-con-strings/">
                Jugando con strings
              </Link>
              <ul>
                <li>Conociendo sus métodos</li>
                <li>Template String</li>
              </ul>
            </li>
            <li>
              <Link href="/temario/manejo-de-fechas/">Manejo de fechas</Link>
            </li>
            <li>
              <Link href="/temario/estructuras-de-control/">
                Estructuras de control
              </Link>
              <ul>
                <li>Condicionales</li>
                <li>Bucles e iteraciones</li>
              </ul>
            </li>
            <li>
              <Link href="/temario/funciones/">Funciones</Link>
              <ul>
                <li>La forma clásica</li>
                <li>Arrow function</li>
              </ul>
            </li>
            <li>
              <Link href="/temario/scope/">¿Qué es el scope?</Link>
            </li>
            <li>
              <Link href="/temario/arrays/">Arrays o arreglos</Link>
            </li>
            <li>
              <Link href="/temario/objetos/">Objetos</Link>
            </li>
            <li>
              <Link href="/temario/json/">JSON</Link>
            </li>
            <li>
              <Link href="/temario/dom/">DOM</Link>
              <ul>
                <li>¿Qué es el DOM?</li>
                <li>Seleccionar, crear, insertar elementos en el DOM</li>
                <li>Navegar entre la jerarquía del documento</li>
                <li>Controlar clases CSS</li>
              </ul>
            </li>
            <li>
              <Link href="/temario/eventos/">Eventos</Link>
            </li>
            <li>
              <Link href="/temario/asincronia/">Asincronía</Link>
              <ul>
                <li>¿Qué es la asincronía?</li>
                <li>Como dominar peticiones asíncronas</li>
                <li>Consumiendo una API REST</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
