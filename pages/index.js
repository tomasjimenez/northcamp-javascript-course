import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NorthCamp School - Javascript - Temario</title>
        <meta
          name="description"
          content="Temario curso JavaScript de NorthCamp School"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <main>Contenido a mostrar</main>

      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  );
}
