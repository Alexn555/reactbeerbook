import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
  headers: {
    "Content-Type": "application/json"
  }
});
