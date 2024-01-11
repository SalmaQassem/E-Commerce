import styles from "../../styles/_Sneakers.module.scss";
import Head from "next/head";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../../components/UI/Container"));
const Main = dynamic(() => import("../../components/UI/Main"));
const ProductCard = dynamic(() =>
  import("../../components/Sneakers/ProductCard")
);
const Sneakers = (props) => {
  return (
    <>
      <Head>
        <title>Sneakers</title>
        <meta name="description" content="sneakers page" />
      </Head>
      <Main>
        <Container>
          <div className={styles.products}>
            {props.products.data.length > 0 &&
              props.products.data.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    id={item.id}
                    data={item.attributes}
                  />
                );
              })}
          </div>
        </Container>
      </Main>
    </>
  );
};
export default Sneakers;
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:1337/api/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
};
