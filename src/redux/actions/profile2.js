import actionStrings from "./actionStrings";
import { patchProfile2 } from "../../https/profile2";

const patchProfileAction2 = (url, body) => {
  return {
    type: actionStrings.patchProfile,
    payload: patchProfile2(url, body),
  };
};

const profileAction2 = {
  patchProfileAction2,
};

export default profileAction2;
