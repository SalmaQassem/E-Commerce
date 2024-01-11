import { createContext, useState } from "react";

const FavoriteContext = createContext({
  items: [],
  amount: 0,
  addToFavorite: (productId) => {},
});
export const FavoriteContextProvider = ({ children }) => {
  const [favoriteData, setFavoriteData] = useState({ items: [], amount: 0 });
  const setDataHandler = (productId) => {
    setFavoriteData((prevState) => {
      const isFound = prevState.items.includes(productId);
      if (isFound) {
        const newArr = prevState.items.filter((item) => {
          return item !== productId;
        });
        return {
          items: newArr.slice(),
          amount: prevState.amount - 1,
        };
      } else {
        return {
          items: [...prevState.items, productId],
          amount: prevState.amount + 1,
        };
      }
    });
  };
  return (
    <FavoriteContext.Provider
      value={{
        items: favoriteData.items.slice(),
        amount: favoriteData.amount,
        addToFavorite: setDataHandler,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContext;
