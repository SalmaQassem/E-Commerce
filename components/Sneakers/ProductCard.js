import styles from "../../styles/_ProductCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineStar } from "react-icons/md";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";
const ProductCard = ({ id, data }) => {
  const src = `${data.imageUrl}`;
  const currency = "egp";
  const favoriteContext = useContext(FavoriteContext);
  const isFound = favoriteContext.items.includes(data.id);
  const addToFavoriteHandler = () => {
    favoriteContext.addToFavorite(data.id);
  };
  return (
    <div className={styles.cardWrapper}>
      <button
        className={styles.favorite}
        onClick={addToFavoriteHandler}
        onMouseOver={(e) => {
          e.preventDefault();
        }}
        title="Add to wishlist"
      >
        {isFound ? <BsHeartFill /> : <BsHeart />}
      </button>
      <Link href={`/Sneakers/${id}`} className={styles.card}>
        <div className={styles.img}>
          <Image
            loader={() => src}
            src={src}
            unoptimized={true}
            alt={`product-${data.id}-img`}
            priority={true}
            fill
          />
        </div>
        <div className={styles.details}>
          <div className={styles.head}>
            <h2>{data.name}</h2>
            <div className={styles.rating}>
              <span className={styles.icon}>
                <MdOutlineStar />
              </span>
              <span>{`(${data.rating})`}</span>
            </div>
          </div>
          <div className={styles.priceDetails}>
            <div className={styles.price}>
              <div className={styles.number}>
                {data.afterSalePrice}
                <span className={styles.currency}> {currency}</span>
              </div>
              <div className={`${styles.number} ${styles.before}`}>
                {data.beforeSalePrice}
                <span className={styles.currency}> {currency}</span>
              </div>
            </div>
            <span className={styles.percentage}>{data.salePercentge}%</span>
          </div>
          <div className={styles.sellingAmount}>
            <span>upon demand</span>
            <span>{data.sellNumber} bought</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
