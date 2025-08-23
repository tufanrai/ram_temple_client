import { axiosInstance } from "./AxiosInstance";
import { IQuery } from "../components/interface/QueryINterface";

// post request
export const PostQuery = async (data: IQuery) => {
  try {
    const response = await axiosInstance.post("/query/", data);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};
