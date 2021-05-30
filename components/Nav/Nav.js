import Link from "next/link";
import styles from "../../styles/components/Nav.module.scss";

export default function Nav({ title, back, next }) {
  return (
    <>
      <div className={`${styles.container_nav} ${styles.desktop}`}>
        <div className={styles.wrapper_nav}>
          <div className={styles.nav_back}>
            {back?.link && (
              <div className={styles.nav_button_info}>
                <Link href={back.link}>
                  <a>
                    <i className={`${styles.arrow} ${styles.left}`} />
                    Atrás
                    <div className={styles.title_link}>{back.title}</div>
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div className={styles.nav_next}>
            {next?.link && (
              <div className={styles.nav_button_info}>
                <Link href={next.link} className={styles.pruebas}>
                  <a>
                    Siguiente
                    <i className={`${styles.arrow} ${styles.right}`} />
                    <div className={styles.title_link}>{next.title}</div>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`${styles.container_nav} ${styles.mobile}`}>
        <div className={styles.wrapper_nav}>
          <div className={styles.nav_back}>
            {back?.link && (
              <Link href="/">
                <a>
                  <i className={`${styles.arrow} ${styles.left}`} />
                </a>
              </Link>
            )}
          </div>
          <div className={styles.nav_next}>
            {next?.link && (
              <Link href={next.link}>
                <a>
                  <i className={`${styles.arrow} ${styles.right}`} />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
