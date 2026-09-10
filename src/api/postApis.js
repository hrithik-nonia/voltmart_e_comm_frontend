import axiosInstance from "./axiosInstance";

export const uploadImage = (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile); // ✅ "image" → "file" karo
  return axiosInstance.post("/upload/image", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};