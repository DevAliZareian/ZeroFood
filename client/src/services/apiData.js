import axios from "axios";
import { BASE_URL, UserToken } from "../utils/constants";

export default async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching data");
  }
}
export async function fetchBasket() {
  try {
    const response = await axios.get(`${BASE_URL}/order/show`, UserToken);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.message.includes("network")) {
      throw new Error("Network error.");
    } else {
      throw error;
    }
  }
}
