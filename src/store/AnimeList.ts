import { create } from "zustand";
import { IAnimeDetailItem } from "../Interface/AnimeDetail";

// const initStore = {
//   Anime: {
//     data: [],
//     loading: false,
//     error: null,
//   },
// };
// type AnimeList = {
//   data: IAnimeDetailItem[];
//   loading: boolean;
//   error: null | any;
// };

// type AnimeListStore = {
//   anime: AnimeList;
//   setAnimeList: (data: IAnimeDetailItem[]) => void;
//   clearAnime: () => void;
//   setLoading: (loading: boolean) => void;
//   setError: (error: null | any) => void;
// };

// export const useAnimeListStore = create<AnimeListStore>((set) => ({
//   anime: { data: [], loading: false, error: null },
//   setAnimeList: (data: IAnimeDetailItem[]) =>
//     set({ anime: { data, loading: false, error: null } }),
//   clearAnime: () => set({ anime: { data: [], loading: false, error: null } }),
//   setLoading: (loading: boolean) =>
//     set((state) => ({ anime: { ...state.anime, loading } })),
//   setError: (error: null | any) =>
//     set((state) => ({ anime: { ...state.anime, error } })),
// setAnimeList: (data: IAnimeDetailItem[]) => set({ animeList: data }),
// clearAnime: () =>
//   set({ animeList: { data: [], loading: false, error: null } }),
// }));
const initStore = {
  anime: {
    data: [],
    loading: false,
    error: null,
  },
  fetchAnime: {
    data: [],
    loading: false,
    error: null,
  },
};
type AnimeType = {
  data: IAnimeDetailItem[];
  loading: boolean;
  error: null | any;
};

type UseAnimeListType = {
  anime: AnimeType;
  fetchAnime: AnimeType;
  setAnimeList: (data: AnimeType) => void;
  setFetchAnimeList: (value: AnimeType) => void;
  clearAnime: () => void;
};

export const useAnimeListStore = create<UseAnimeListType>((set) => ({
  ...initStore,
  setAnimeList: (data: AnimeType) => set({ anime: data }),
  setFetchAnimeList: (value: AnimeType) => set({ fetchAnime: value }),
  clearAnime: () => set({ ...initStore }),
}));
