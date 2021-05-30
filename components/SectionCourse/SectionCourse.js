import styles from "../../styles/components/SectionCourse.module.scss";

export default function SectionCourse() {
  return (
    <div className={styles.container__section_course}>
      <h1 className={styles.title}>Curso de JavaScript</h1>
      <div className={styles.call}>Convocatoria Junio 2021</div>
    </div>
  );
}
