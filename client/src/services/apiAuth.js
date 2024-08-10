import { useNavigate } from "react-router-dom";
import axios from "axios";

import { fetchToken } from "../middlewares/tokenMiddleware";
import { BASE_URL, HEADERS } from "../utils/constants";
import { validateEmail } from "../utils/helpers";

export async function login(userData) {
  const user = { userIdentify: userData.email };
  if (!userData.email || !validateEmail(userData.email)) {
    throw new Error("Invalid email address");
  }
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, user, { headers: HEADERS });
    if (response.status != 200) {
      throw new Error(response.data.message || "Login failed!");
    }
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    if (error.message.includes("network")) {
      throw new Error("Network error.");
    } else {
      throw error;
    }
  }
}
export function logout() {
  const navigate = useNavigate();
  try {
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
  } catch (error) {
    if (error.message.includes("network")) {
      throw new Error("Network error.");
    } else {
      throw error;
    }
  }
}
export function getUserData() {
  try {
    const response = fetchToken();
    if (!response.data) {
      throw new Error("Failed to fetch user data");
    }
    return response.data;
  } catch (error) {
    if (error.message.includes("network")) {
      throw new Error("Network error.");
    } else {
      throw error;
    }
  }
}
export async function deleteAccount(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/delete?=id:${id}`);
    if (response.status != 200) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    if (error.message.includes("network")) {
      throw new Error("Network error.");
    } else {
      throw error;
    }
  }
}
