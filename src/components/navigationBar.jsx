import avatar from "../assets/images/avatar.png";
import styles from "./navigationBar.module.scss";

const NavigationBar = (params) => {
  return (
    <nav className={styles.section}>
      <ul className={styles.end}>
        <li className={styles.item}>
          <span className="mr-4">
            <p className="m-0" data-testid="username">Cody simmons</p> 
            <small className="muted" data-testid="userDesignation">Lecturer</small>
          </span>
          <img src={avatar} alt="" className={styles.avatar} data-testid="userImage"/>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
