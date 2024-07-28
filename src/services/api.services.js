import axios from "axios";
import { API_BASE } from "./constants";

const axiosApi = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
});

axiosApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  ({ response }) => {
    console.log("axios rejection ... ", response);
    const error = {
      status: response?.data?.status,
      message: response?.data?.message || "Undentity error",
    };
    return Promise.reject(error);
  }
);

export default axiosApi;
