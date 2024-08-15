import axios from "axios";
import { IAnimeDetailItem } from "../Interface/AnimeDetail";
import { handleResponse } from "../Util/HandleError";
interface IGetAnimeDetailResponse {
  status: number;
  data: IAnimeDetailItem;
}

export const animeDetailService = {
  getAnimeDetail: async (mal_id: number): Promise<IGetAnimeDetailResponse> => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${mal_id}`
      );
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.success(error);
    }
  },
};
