import styles from "../../../styles/_ProductPage.module.scss";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../../../components/UI/Container"));
const Main = dynamic(() => import("../../../components/UI/Main"));
const ProductPage = (props) => {
  console.log(props.product.name);
  return (
    <>
      <Head>
        <title>Sneakers</title>
        <meta name="description" content="sneaker page" />
      </Head>
      <Main>
        <Container>
          <div className={styles.card}>
            <div className={styles.img}>
              <Image
                loader={() => props.product.imageUrl}
                src={props.product.imageUrl}
                unoptimized={true}
                alt="product-image"
                priority={true}
                fill
              />
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};
export default ProductPage;
export const getServerSideProps = async ({ query }) => {
  const response = await fetch(
    `http://localhost:1337/api/products/${query.productId}`
  );
  const data = await response.json();
  return {
    props: {
      product: {
        name: data.data.attributes.name,
        imageUrl: data.data.attributes.imageUrl,
      },
    },
  };
};
