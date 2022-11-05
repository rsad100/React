import actionStrings from "./actionStrings";
import { getProduct } from "../../https/products";

const getProductAction = (url) => {
  return {
    type: actionStrings.getProducts,
    payload: getProduct(url),
  };
};

const productAction = {
  getProductAction,
};

export default productAction;
