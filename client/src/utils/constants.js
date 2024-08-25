export const BASE_URL = "https://kala.liara.run";
export const HEADERS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "OPTIONS, POST, GET,PUT,DELETE", "Access-Control-Max-Age": 2592000 };
export const UserToken = { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } };
