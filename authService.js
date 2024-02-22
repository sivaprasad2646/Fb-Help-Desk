import axios from "axios";
import { serverUrl } from "./config";

const isLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};
export default isLogin;

export const signup = async (data) =>
  await axios.post(serverUrl + "auth/signup", data);
export const login = async (data) =>
  await axios.post(serverUrl + "auth/login", data);

export const storeToken = (token) => {
  localStorage.setItem("token", token);
};

export const authHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      authorization: "Bearer " + token,
    };
  } else {
    return false;
  }
};
