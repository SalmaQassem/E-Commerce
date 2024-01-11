import dynamic from "next/dynamic";
import "../styles/main.scss";
const Root = dynamic(() => import("../components/Layout/Root"));
import { FavoriteContextProvider } from "../store/favorite-context";
function MyApp({ Component, pageProps }) {
  return (
    <FavoriteContextProvider>
      <Root>
        <Component {...pageProps} />
      </Root>
    </FavoriteContextProvider>
  );
}
export default MyApp;
