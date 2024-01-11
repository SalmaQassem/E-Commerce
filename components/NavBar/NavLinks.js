import styles from "../../styles/_NavLinks.module.scss";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";

const NavLinks = () => {
  const router = useRouter();
  const links = [
    { name: "home", url: "/" },
    { name: "sneakers", url: "/Sneakers" },
    { name: "basketball", url: "/Basketball" },
    { name: "football", url: "/Football" },
    { name: "sale", url: "/Sale" },
  ];
  return (
    <div className={styles.navMiddle}>
      <form className={styles.search}>
        <label htmlFor="searchText" className={styles.searchIcon}>
          <BiSearch />
        </label>
        <input
          id="searchText"
          name="searchText"
          type="text"
          placeholder="What are you looking for?"
        />
      </form>
      <ul className={styles.navLinks}>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.url}
                className={`${
                  router.pathname === item.url ? styles.active : ""
                }`}
                aria-label={item.name}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default NavLinks;
