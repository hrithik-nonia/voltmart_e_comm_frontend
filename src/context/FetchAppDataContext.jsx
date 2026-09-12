import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "../graphql/query/getProduct";

const FetchAppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { page, limit: 10, categoryId },
  });

  // onCompleted ki jagah useEffect
  useEffect(() => {
    const newProducts = data?.products?.data ?? [];
    if (newProducts.length === 0) return;

    if (page === 1) {
      // eslint-disable-next-line
      setAllProducts(newProducts); // fresh/category change
    } else {
      setAllProducts((prev) => [...prev, ...newProducts]); // append
    }
    // eslint-disable-next-line
  }, [data]); // data change hone pe trigger

  const pagination = data?.products?.pagination ?? null;

  const nextPage = () => {
    if (pagination?.hasNext) setPage((p) => p + 1);
  };

  const selectCategory = (id) => {
    setCategoryId(id || null);
    setPage(1);
    setAllProducts([]);
  };

  return (
    <FetchAppDataContext.Provider
      value={{
        products: allProducts,
        pagination,
        page,
        categoryId,
        loading,
        error,
        nextPage,
        selectCategory,
      }}
    >
      {children}
    </FetchAppDataContext.Provider>
  );
};

// eslint-disable-next-line
export const useFetchAppDataContext = () => useContext(FetchAppDataContext);
