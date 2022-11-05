import Axios from "axios";

const getProduct = (url) => {
  return Axios.get(url);
};

export { getProduct };
