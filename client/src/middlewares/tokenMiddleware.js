import { BASE_URL } from "../utils/constants";
import axios from "axios";

async function getAccessToken() {
  try {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken && isValidToken(storedToken)) {
      return storedToken;
    }
    const response = await axios.post(`${BASE_URL}/auth/token`, {});
    const newToken = response.data.accessToken;
    localStorage.setItem("accessToken", newToken);
    return newToken;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
}
async function isValidToken(token) {
  if (!token) {
    return false;
  }
  try {
    const response = await axios.post(`${BASE_URL}/auth/check/token`, { token });
    return response.data.isValid;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
}
export async function fetchToken() {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios.post(`${BASE_URL}/auth/check/token`, null, { headers: { Authorization: `Bearer ${accessToken}` } });
    console.log(response.data.user);
    return response.data.user;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
}
