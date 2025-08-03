import "dotenv/config";
import axios from "axios";

const Uri = process.env.NEXT_PUBLIC_API ?? "";

// axios instance
export const axiosInstance = axios.create({
  baseURL: `${Uri}`,
});
