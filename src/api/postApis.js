import axiosInstance from "./axiosInstance";

export const uploadImage = (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile); // ✅ "image" → "file" karo
  return axiosInstance.post("/upload/image", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};



export const uploadProfileImage = async (file) => {
  const data = new FormData();
  data.append("file", file);

  const res = await axiosInstance.post("/upload/profile-image", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data.image_url;
};