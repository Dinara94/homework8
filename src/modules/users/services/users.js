import api from "../../../api";
import { USERS_API_URI } from "../constants";

export function getUsersList() {
  return api.get(USERS_API_URI);
}
