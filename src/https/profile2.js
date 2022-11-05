import Axios from "axios";

const patchProfile2 = (url, body) => {
  return Axios.patch(url, body);
};

export { patchProfile2 };
