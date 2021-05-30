import Head from "next/head";
import styles from "../../styles/components/Home.module.scss";

import Header from "../../components/Header/Header";
import SectionCourse from "../../components/SectionCourse/SectionCourse";
import Footer from "../../components/Footer/Footer";

export default function ModuleBlock({ ComponentToRender }) {
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

      <Header />
      <main>
        <SectionCourse />
        <section>{ComponentToRender}</section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
