import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header__container}>
      <img src="images/logo-northcamp.png" />
      Esto es el header :D
    </header>
  );
}
