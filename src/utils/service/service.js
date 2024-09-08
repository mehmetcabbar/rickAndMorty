import { api } from "./api";

export const getAllCharacters = async () => {
  try {
    return await api.get("?page=1");
  } catch (error) {
    return error;
  }
};
