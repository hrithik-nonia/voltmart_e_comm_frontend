import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useLazyQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "../graphql/query/getProduct";

const FetchAppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  // ===========================================
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const prevCategoryId = useRef(null);

  // ✅ array destructure karo
  const [fetchProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS, {
    fetchPolicy: "network-only",
  });

  // page ya categoryId change hone pe manually call karo
  useEffect(() => {
    fetchProducts({ variables: { page, limit: 10, categoryId } });
    // eslint-disable-next-line
  }, [page, categoryId]);

  useEffect(() => {
    const newProducts = data?.products?.data ?? [];
    if (newProducts.length === 0) return;

    if (categoryId !== prevCategoryId.current) {
      setAllProducts(newProducts);
      prevCategoryId.current = categoryId;
    } else if (page === 1) {
      // eslint-disable-next-line
      setAllProducts(newProducts);
    } else {
      setAllProducts((prev) => [...prev, ...newProducts]);
    }
    // eslint-disable-next-line
  }, [data]);

  const pagination = data?.products?.pagination ?? null;

  const nextPage = () => {
    if (pagination?.hasNext) setPage((p) => p + 1);
  };

  const selectCategory = (id) => {
    setCategoryId(id || null);
    setPage(1);
  };
  // ===============================

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
