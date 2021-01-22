import styles from "./box.module.scss";
function Box({ children, className }) {
  return <article className={`${styles.box} ${className}`}>{children}</article>;
}

export default Box;
