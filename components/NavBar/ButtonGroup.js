import styles from "../../styles/_ButtonGroup.module.scss";
import { useContext } from "react";
import FavoriteContext from "@/store/favorite-context";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

const ButtonGroup = () => {
  const favoriteContext = useContext(FavoriteContext);
  return (
    <div className={styles.buttonGroup}>
      <div className={styles.optionsButton}>
        <button>
          <MdOutlineShoppingCart />
        </button>
        <button
          className={`${styles.favoriteBtn} ${
            favoriteContext.amount > 0 ? styles.fill : ""
          }`}
        >
          {favoriteContext.amount > 0 ? <BsHeartFill /> : <BsHeart />}
          {favoriteContext.amount > 0 && <span>{favoriteContext.amount}</span>}
        </button>
        <button>
          <FaRegUser />
        </button>
      </div>
      <button className={styles.langButton}>ar</button>
    </div>
  );
};
export default ButtonGroup;
