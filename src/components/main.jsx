import styles from "./main.module.scss";
import Statistics from "./statistics";
import Students from "./students";

const Main = (params) => {
  return (
    <main className={styles.section}>
      <header>
        <h2 className="title mb-2">Dashboard</h2>
        <h5 className="subtitle mt-0 muted">Mobile UX/UI Design course</h5>
      </header>
      <Statistics></Statistics>
      <Students></Students>
    </main>
  );
};

export default Main;
