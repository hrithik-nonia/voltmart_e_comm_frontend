import { createContext, useContext, useState, useEffect } from "react";
import { GET_CART_DATA } from "../graphql/query/getCartData";
import { useQuery } from "@apollo/client/react";
import { IsTokenValid } from "../utils/verifyToken";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // token verify
  const [isLogin, setIsLogin] = useState(() => IsTokenValid());

  // get cart data
  const {
    data: cartData,
    loading: cartLoading,
    error: cartError,
  } = useQuery(GET_CART_DATA, {
    skip: !isLogin,
  });

  useEffect(() => {
    if (cartData) {
      // eslint-disable-next-line
      setCartCount(cartData?.getCartData?.length || 0);
    }
  }, [cartData]);

  return (
    <>
      <AppContext.Provider
        value={{
          cartData,
          cartCount,
          isLogin,
          setIsLogin,
          cartLoading,
          cartError,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

// eslint-disable-next-line
export const useAppProvider = () => useContext(AppContext);
