import logo from "../assets/images/logo.png";
import styles from "./logo.module.scss";

const Logo = (params) => {
  return (
    <section className={styles.section}>
      <img src={logo} className={styles.logo} alt=""></img>
    </section>
  );
};

export default Logo;
