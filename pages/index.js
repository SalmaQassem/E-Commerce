import styles from "../styles/_HomePage.module.scss";
import Head from "next/head";
import dynamic from "next/dynamic";
const Main = dynamic(() => import("../components/UI/Main"));
const HomePage = () => {
  return (
    <>
      <Head>
        <title>Nike Store</title>
        <meta name="description" content="home page" />
      </Head>
      <Main></Main>
    </>
  );
};
export default HomePage;
