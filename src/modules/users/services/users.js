import api from "../../../api";
import { API_URL} from "../../../constants";

export function getUsersList() {
  return api.get(API_URL);
}
