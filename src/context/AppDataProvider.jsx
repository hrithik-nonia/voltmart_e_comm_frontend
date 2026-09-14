import {
  createContext,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useLazyQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "../graphql/query/getProduct";

// eslint-disable-next-line
export const FetchAppDataContext = createContext(); // yahan banana hai

export const AppDataProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const prevCategoryId = useRef(null);
  const prevDataRef = useRef(null);

  const [fetchProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS, {
    fetchPolicy: "network-only",
  });

  const stableFetchProducts = useCallback(
    (variables) => fetchProducts({ variables }),
    // eslint-disable-next-line
    [],
  );

  useEffect(() => {
    stableFetchProducts({ page, limit: 10, categoryId });
  }, [page, categoryId, stableFetchProducts]);

  useEffect(() => {
    if (!data || data === prevDataRef.current) return;
    prevDataRef.current = data;

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

  const nextPage = useCallback(() => {
    if (pagination?.hasNext) setPage((p) => p + 1);
  }, [pagination]);

  const selectCategory = useCallback((id) => {
    setCategoryId(id || null);
    setPage(1);
  }, []);

  const contextValue = useMemo(
    () => ({
      products: allProducts,
      pagination,
      page,
      categoryId,
      loading,
      error,
      nextPage,
      selectCategory,
    }),
    [
      allProducts,
      pagination,
      page,
      categoryId,
      loading,
      error,
      nextPage,
      selectCategory,
    ],
  );

  return (
    <FetchAppDataContext.Provider value={contextValue}>
      {children}
    </FetchAppDataContext.Provider>
  );
};
