import Link from "next/link";
import styles from "../../styles/components/Nav.module.scss";

export default function Nav({ now, nextLink }) {
  return (
    <>
      <div className={`${styles.container_nav} ${styles.desktop}`}>
        <div className={styles.wrapper_nav}>
          <div className={styles.nav_back}>
            <Link href="/">
              <a>
                <i className={`${styles.arrow} ${styles.left}`} />
                Atrás
              </a>
            </Link>
          </div>
          {nextLink && (
            <div className={styles.nav_next}>
              <Link href="/">
                <a>
                  Siguiente
                  <i className={`${styles.arrow} ${styles.right}`} />
                </a>
              </Link>
            </div>
          )}
          {!nextLink && <div className={styles.nav_next}></div>}
        </div>
      </div>

      <div className={`${styles.container_nav} ${styles.mobile}`}>
        <div className={styles.wrapper_nav}>
          <div className={styles.nav_back}>
            <Link href="/">
              <a>
                <i className={`${styles.arrow} ${styles.left}`} />
              </a>
            </Link>
          </div>
          {nextLink && (
            <div className={styles.nav_next}>
              <Link href="/">
                <a>
                  <i className={`${styles.arrow} ${styles.right}`} />
                </a>
              </Link>
            </div>
          )}
          {!nextLink && <div className={styles.nav_next}></div>}
        </div>
      </div>
    </>
  );
}
