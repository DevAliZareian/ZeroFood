import axios from "axios";

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching data");
  }
};

export default fetchData;
