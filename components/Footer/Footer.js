import styles from "../../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container__footer}>
      <div className={styles.footer__text}>
        NorthCamp School © 2021. Todos Los Derechos Reservados.
      </div>
    </footer>
  );
}
