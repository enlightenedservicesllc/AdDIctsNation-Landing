import axios from "axios";

const BASE_URL = "https://api.addictsnation.com/api/v1";
// "http://localhost:8000/api/v1";

export const createContact = async (data) => {
  const response = await axios.post(`${BASE_URL}/contacts`, data);
  return response.data;
};
