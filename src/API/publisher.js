import axios from "axios";

export const getPublishers = async () => {
  const { data } = await
  axios.get (
    import.meta.env.VITE_APP_BASE_URL + "/v1/publishers");
  return data;
};

export const deletePublisher = async (id) => {
  const { data } = await axios.delete (
    `${import.meta.env.VITE_APP_BASE_URL}/v1/publishers/${id}`
  );
  return data;
};

export const createPublisher = async (publisher) => {
  const { data } = await axios.post (
    `${import.meta.env.VITE_APP_BASE_URL}/v1/publishers`,
    publisher
  );
  return data;
};

export const updatePublisherFunc = async (publisher) => {
  const { data } = await axios.put(   `${import.meta.env.VITE_APP_BASE_URL}/v1/publishers/${publisher.id}`,
    publisher
  );
  return data;
};



