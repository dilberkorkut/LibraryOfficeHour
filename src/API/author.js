import axios from "axios";

export const getAuthors = async () => {
  const { data } = await axios.get(
    import.meta.env.VITE_APP_BASE_URL + "/v1/authors");
    return data;
};

export const deleteAuthor = async (id) => {
  const { data } = await axios.delete (   `${import.meta.env.VITE_APP_BASE_URL}/v1/authors/${id}`
  );
  return data;
};

export const createAuthor= async (author) => {
  const { data } = await axios.post (
    `${import.meta.env.VITE_APP_BASE_URL}/v1/authors`,
    author
  );
  return data;
};

export const updateAuthorFunc = async (author) => {
  const { data } = await axios.put(
  `${import.meta.env.VITE_APP_BASE_URL}/v1/authors/${author.id}`,
    author
  );
  return data;
};



