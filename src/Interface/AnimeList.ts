export interface IAnimeListResponse {
  data: IAnimeListItem[];
  status: number;
}
export interface IAnimeListItem {
  name: string;
  url: string;
}