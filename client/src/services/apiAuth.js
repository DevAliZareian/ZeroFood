import { useNavigate } from "react-router-dom";
import axios from "axios";

import { fetchToken } from "../middlewares/tokenMiddleware";
import { BASE_URL, HEADERS } from "../utils/constants";
import { validateEmail } from "../utils/helpers";

export async function authorization(userData) {
  const user = { email: userData.email };
  if (!userData.email || !validateEmail(userData.email)) {
    throw new Error("Invalid email address");
  }
  try {
    const response = await axios.post(`${BASE_URL}/auth/send/code`, user, { headers: HEADERS });
    if (response.status != 200) {
      throw new Error(response.data.message || "authorization failed!");
    }
    localStorage.setItem("authorizationToken", response.data.token);
    return response.data;
  } catch (error) {
    if (error.message.includes("network")) {
      throw new Error("Network error.");
    } else {
      throw error;
    }
  }
}
export async function login(code) {
  const authorizationToken = localStorage.getItem("authorizationToken");
  const data = JSON.stringify({ userCode: code.code });
  try {
    const response = await axios.post(`${BASE_URL}/user/signin`, data, { headers: { Authorization: `Bearer ${authorizationToken}`, "Content-Type": "application/json" } });
    if (response.status != 200) {
      throw new Error(response.response.data.message || "Login failed!");
    }
    localStorage.setItem("accessToken", response.data.refreshToken);
    return response;
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
