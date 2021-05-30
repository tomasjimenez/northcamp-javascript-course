import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/components/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container__header}>
      <div className={styles.header__logo}>
        <img src="/images/logo/logo-northcamp.png" />
      </div>
    </header>
  );
}
