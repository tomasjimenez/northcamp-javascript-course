import Head from "next/head";
import styles from "../../styles/components/Home.module.scss";

import Header from "../../components/Header/Header";
import SectionCourse from "../../components/SectionCourse/SectionCourse";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

export default function ModuleBlock({ ComponentToRender, now, nextLink }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NorthCamp School - Javascript - {now}</title>
        <meta
          name="description"
          content="Temario curso JavaScript de NorthCamp School"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <SectionCourse />
        <Nav now={now} nextLink={nextLink} />
        <section>{ComponentToRender}</section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
