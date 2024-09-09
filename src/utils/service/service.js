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

export const getSearchResults = async (search, page = 1, gender) => {
  try {
    let query = `?`;
    if (search) {
      query += `&name=${search}`;
    }
    if (gender) {
      query += `&gender=${gender}`;
    }
    if (page) {
      query += `&page=${page}`;
    }
    return await api.get(query);
  } catch (error) {
    return error;
  }
};
