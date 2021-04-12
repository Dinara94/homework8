import api from "../../../api";
import { PHOTOS_API } from "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users";

export function getUser(userId) {
  return api.get(PHOTOS_API, { params: { userId } });
}
