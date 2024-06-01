import axios from "axios";
import baseURL from "../../api/BaseUrl";


export const getListCart = (id) => {
  return axios.get(baseURL + "carts/users/" + id);
};

export const delCart = (id) => {
  return axios.delete(baseURL + "carts/" + id);
};

export const addOrder = (payload) => {
  return axios.post(baseURL + "orders", payload);
};

export const updateQuanlityOrder = (payload, quantity) => {
  return axios.put(
    baseURL +
      "carts/" +
      payload?.userId +
      "/products/" +
      payload?.productId,
    quantity
  );
};
