import Head from "next/head";
import Image from "next/image";
import styles from "../styles/components/Home.module.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionCourse from "../components/SectionCourse/SectionCourse";
import ModuleHome from "../modules/Home/ModuleHome";

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

      <Header />
      <main>
        <SectionCourse />
        <section>
          <ModuleHome />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
