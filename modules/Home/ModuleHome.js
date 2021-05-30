import styles from "../../styles/modules/ModuleHome.module.scss";

export default function ModuleHome() {
  return (
    <div className={styles.container}>
      <div className={styles.left_column}>
        <div className={styles.details_course}>
          <h3 className={styles.course_title}>Docente</h3>
          <div className={styles.profile_photo}>
            <img src="images/ficha/mrcodedev.jpg" alt="José Luis García Abad" />
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
          <div className={styles.app_tools}>Visual Studio Code</div>
          <div className={styles.app_tools}>NodeJS</div>
          <div className={styles.app_tools}>Git</div>
          <div className={styles.app_tools}>RunJS</div>
        </div>
      </div>

      <div className={styles.right_column}>
        <h2 className={styles.title_section}>Temario</h2>
        <div className={styles.temary}>
          <ol>
            <li>
              Conociendo JavaScript
              <ul>
                <li>¿Qué es JavaScript?: un poco de historia</li>
                <li>EcmaScript: las especificaciones de JavaScript</li>
              </ul>
            </li>
            <li>Chrome y la consola: tus aliados</li>
            <li>
              Agregando JavaScript en HTML
              <ul>
                <li>Estrategias de carga de JavaScript</li>
              </ul>
            </li>
            <li>
              Variables:
              <ul>
                <li>Tipos de Variables</li>
                <li>Nomenclaturas</li>
              </ul>
            </li>
            <li>Tipos de datos</li>
            <li>
              Comentarios en el código
              <ul>
                <li>Consejos a la hora de poner comentarios</li>
              </ul>
            </li>
            <li>Operadores aritméticos</li>
            <li>Coerción: la cosa se pone interesante</li>
            <li>¿Qué diablos es el hoisting?</li>
            <li>
              Jugando con strings:
              <ul>
                <li>Conociendo sus métodos</li>
                <li>Template String</li>
              </ul>
            </li>
            <li>Manejo de fechas</li>
            <li>
              Estructuras de control
              <ul>
                <li>Condicionales</li>
                <li>Bucles e iteraciones</li>
              </ul>
            </li>
            <li>
              Funciones
              <ul>
                <li>La forma clásica</li>
                <li>Arrow function</li>
              </ul>
            </li>
            <li>¿Qué es el scope?</li>
            <li>Arrays o arreglos</li>
            <li>Objetos</li>
            <li>JSON</li>
            <li>
              DOM
              <ul>
                <li>¿Qué es el DOM?</li>
                <li>Seleccionar, crear, insertar elementos en el DOM</li>
                <li>Navegar entre la jerarquía del documento</li>
                <li>Controlar clases CSS</li>
              </ul>
            </li>
            <li>Eventos</li>
            <li>
              Asincronía
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
