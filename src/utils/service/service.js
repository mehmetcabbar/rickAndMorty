import { api } from "./api";

export const getAllCharacters = async (page) => {
  try {
    return await api.get(`?page=${page}`);
  } catch (error) {
    return error;
  }
};

export const getSingleCharacter = async (id) => {
  try {
    return await api.get(`/${id}`);
  } catch (error) {
    return error;
  }
};

export const getSearchResults = async (search) => {
  try {
    return await api.get(`?name=${search}`);
  } catch (error) {
    return error;
  }
};
