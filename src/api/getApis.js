import axiosInstance from "./axiosInstance";

export const exportProductsCSV = async () => {
  const response = await axiosInstance.get("/export/products", {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const a = document.createElement("a");
  a.href = url;
  a.download = "voltmart_products.csv";
  a.click();
  window.URL.revokeObjectURL(url);
};