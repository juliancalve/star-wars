import axiosInstance from "../api/api";

const BASE_URL = "/planets";

export const getPlanets = () =>
  Promise.allSettled([
    axiosInstance.get(`${BASE_URL}?page=1`),
    axiosInstance.get(`${BASE_URL}?page=2`),
    axiosInstance.get(`${BASE_URL}?page=3`),
    axiosInstance.get(`${BASE_URL}?page=4`),
    axiosInstance.get(`${BASE_URL}?page=5`),
    axiosInstance.get(`${BASE_URL}?page=6`),
  ]);
