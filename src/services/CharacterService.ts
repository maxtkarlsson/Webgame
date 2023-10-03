import axios from "axios";
import { ICharacter } from "../models/ICharacter";

const BASE_URL = "http://localhost:3000/api/v1/characters";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const getCharacters = async (): Promise<ICharacter[]> => {
  return await get<ICharacter[]>("");
};

export const getCharacterById = async (id: number): Promise<ICharacter> => {
  return await get<ICharacter>(`/${id}`);
};
