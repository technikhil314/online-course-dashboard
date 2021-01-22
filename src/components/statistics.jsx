import person from "../assets/images/person.png";
import mark from "../assets/images/mark.png";
import styles from "./statistics.module.scss";
import Box from "./box";
import useCallApi from "../hooks/useCallApi";
function Statistics(params) {
  let { data } = useCallApi({
    url: process.env.REACT_APP_DASHBOARD_API_URL,
  });
  if (!data) {
    data = new Array(3);
  }
  return (
    <section className={styles.section}>
      {data.map(({ id, title, type, line1, line2 }) => (
        <Box key={id}>
          <div className={styles.stats}>
            <img
              className={`mr-4 ${styles.statsLogo}`}
              src={type === "profiles" ? person : mark}
              alt=""
            />
            <div>
              <h3 className="mb-2">
                {line1 && <span>{line1}</span>}
                {line2 && <span className="muted fs-095"> {line2}</span>}
              </h3>
              <small className="muted mt-0">{title}</small>
            </div>
          </div>
        </Box>
      ))}
    </section>
  );
}

export default Statistics;
