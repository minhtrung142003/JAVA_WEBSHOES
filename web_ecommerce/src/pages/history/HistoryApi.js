import axios from "axios";
import baseURL from "../../api/BaseUrl";

// get order theo idUser
export const getOrders = (userId) => {
    return axios.get(baseURL + "orders/users/" + userId);
  };
  