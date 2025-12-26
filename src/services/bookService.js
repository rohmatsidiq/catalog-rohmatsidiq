import axios from "axios";

export const fetchBooks = async () => {
  const res = await axios.get("https://dummyjson.com/products?limit=12");
  return res.data.products;
};

export const fetchBookById = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};
