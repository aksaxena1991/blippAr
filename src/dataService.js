import axios from "axios";
import config from "./config";
const url = config.API_URL;
export const getData = () => {
  return axios.get(url);
};
