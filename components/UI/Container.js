import styles from "../../styles/_Container.module.scss";
const Container = ({ children, subClass }) => {
  return (
    <div className={`${styles.container} ${subClass ? subClass : ""}`}>
      {children}
    </div>
  );
};
export default Container;
