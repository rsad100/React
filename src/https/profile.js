import Axios from "axios";

const patchProfile = (url, body) => {
  return Axios.patch(url, body);
};

export { patchProfile };
