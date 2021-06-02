import Head from "next/head";
import styles from "../../styles/components/Home.module.scss";

import Header from "../../components/Header/Header";
import SectionCourse from "../../components/SectionCourse/SectionCourse";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

//Refactor index home here as block module
export default function ModuleBlock({ ComponentToRender, title, back, next }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NorthCamp School - Javascript - {title}</title>
        <meta
          name="description"
          content="Temario curso JavaScript de NorthCamp School"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <SectionCourse />
        <Nav title={title} back={back} next={next} />
        <section>{ComponentToRender}</section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
