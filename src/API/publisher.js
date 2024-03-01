import axios from "axios";

export const getPublishers = async () => {
  const { data } = await
  axios.get ("http://localhost:8080/v1/publishers");
  return data;
};

export const deletePublisher = async (id) => {
  const { data } = await axios.delete (
    `http://localhost:8080/v1/publishers/${id}`
  );
  return data;
};

export const createPublisher = async (publisher) => {
  const { data } = await axios.post (
    `http://localhost:8080/v1/publishers`,
    publisher
  );
  return data;
};

export const updatePublisherFunc = async (publisher) => {
  const { data } = await axios.put(
    `http://localhost:8080/v1/publishers/${publisher.id}`,
    publisher
  );
  return data;
};



