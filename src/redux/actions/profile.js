import actionStrings from "./actionStrings";
import { patchProfile } from "../../https/profile";

const patchProfileAction = (url, body) => {
  return {
    type: actionStrings.patchProfile,
    payload: patchProfile(url, body),
  };
};

const profileAction = {
  patchProfileAction,
};

export default profileAction;
