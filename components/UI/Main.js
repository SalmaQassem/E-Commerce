import styles from "../../styles/_Main.module.scss";
const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
export default Main;
