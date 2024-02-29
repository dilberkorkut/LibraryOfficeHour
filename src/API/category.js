import axios from "axios";

export const getCategories = async () => {
  const { data } = await axios.get("http://localhost:8080/v1/categories")
  return data;
};

export const deleteCategory =async (id) => {
  const { data } = await axios.delete(
    `http://localhost:8080/v1/categories/${id}`
  );
  return data;
};

export const createCategory = async (category) => {
  const { data } = await axios.post(
    `http://localhost:8080/v1/categories`, 
    category
  );
  return data;
};

export const updateCategoryFunc = async (category) => {
  const { data } = await axios.put(
    `http://localhost:8080/v1/categories/${category.id}`,
    category
  );
  return data;
};