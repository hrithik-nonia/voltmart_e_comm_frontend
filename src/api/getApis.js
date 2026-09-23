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

export const exportOrdersCSV = async (days) => {
  const response = await axiosInstance.get(`/export/recent-orders?days=${days}`, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const a = document.createElement("a");
  a.href = url;
  a.download = `voltmart_orders_last_${days}_days.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const exportCategoryCSV = async () => {
  const response = await axiosInstance.get("/export/category", {
    responseType: "blob"
  })

  const url = window.URL.createObjectURL(new Blob([response.data]))
  const a = document.createElement("a")
  a.href = url;
  a.download = "voltmart_category_last.csv";
  a.click();
  window.URL.revokeObjectURL(url);
}