import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container__header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo/logo-northcamp.png"
              width="80"
              height="60"
              alt="Logo Northcamp School"
              loading="lazy"
            />
          </a>
        </Link>
      </div>
    </header>
  );
}
