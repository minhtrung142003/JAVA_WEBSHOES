import axios from "axios";
import baseURL from "../../api/BaseUrl";


export const searchByCateName = (name) => {
  let url = baseURL + "products/category/" + name;
  return axios.get(url);
};
