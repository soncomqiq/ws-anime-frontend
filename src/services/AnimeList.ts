import axios from "axios";
import { IAnimeListResponse } from "../Interface/AnimeDetail";
import { IResponse, handleResponse } from "../Util/HandleError";

interface IGetAnimeListResponse extends IResponse {
  status: number | undefined;
  data?: IAnimeListResponse;
}

export const animeListService = {
  getAnimeList: async (limit?: number, page?: number) => {
    try {
      const response = await axios.get<IGetAnimeListResponse>(
        `https://api.jikan.moe/v4/anime?limit=${limit || 20}&page=${page || 10}`
      );
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
