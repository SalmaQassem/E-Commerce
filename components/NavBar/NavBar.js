import styles from "../../styles/_NavBar.module.scss";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../UI/Container"));
const NavLinks = dynamic(() => import("./NavLinks"));
const ButtonGroup = dynamic(() => import("./ButtonGroup"));
const NavBar = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navWrapper}>
          <nav className={styles.navbar}>
            <div className={styles.logoWrapper}>
              <Link href="/" className={styles.logo}>
                <Image
                  src={"/Vector.svg"}
                  alt="Picture of the logo"
                  priority={true}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
            <NavLinks />
            <ButtonGroup />
          </nav>
        </div>
      </Container>
    </header>
  );
};
export default NavBar;
