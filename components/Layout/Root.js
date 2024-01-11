import styles from "../../styles/_Root.module.scss";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("../NavBar/NavBar"));
const Root = (props) => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      {props.children}
    </div>
  );
};
export default Root;
