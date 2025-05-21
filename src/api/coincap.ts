import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://rest.coincap.io/v3/",
  params: {
    apiKey: "bb2d1c81244334f1507d4bd5a0cc3a5d972fcdbd5086a5b1e6365e320833021f",
  },
});
