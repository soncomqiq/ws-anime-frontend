import { useEffect } from "react";
import { animeListService } from "../services/AnimeList";
import { animeDetailService } from "../services/AnimeDetail";
import { useForm } from "react-hook-form";
import { useAnimeListStore } from "../store/AnimeList";
import { IAnimeDetailItem } from "../Interface/AnimeDetail";
import { AnimeList } from "../Util/OptionList";
const useSearhForm = () => {
  const {
    register,
    watch,
  } = useForm();
  const { fetchAnime, setAnimeList, setFetchAnimeList } = useAnimeListStore();

  const keyword = watch("keyword");
  const type = watch("type");
  const season = watch("season");
  const sort = watch("sort");
  const animePull = watch("animePull");
  const callData = async (filter: {
    name: string;
    limit: number;
    page: number;
  }) => {
    setFetchAnimeList({ data: [], loading: false, error: null });
    const responselist = await animeListService.getAnimeList(
      filter.limit,
      filter.page
    );
    const animeList = [];
    if (responselist.status == 200) {
      let responseResult = []
      if ("data" in responselist) {
        responseResult = responselist.data.data
      }
      for (const anime of responseResult) {
        const response = await animeDetailService.getAnimeDetail(anime.mal_id);
        const animeData = response.data.data;
        if (animeData)
          animeList.push({
            ...animeData,
            image: animeData.images.webp.image_url,
          });
      }
      setFetchAnimeList({ data: animeList, loading: false, error: null });
      setAnimeList({ data: animeList, loading: false, error: null });
      console.log("AnimeList:", animeList);
      console.log("Anime:", fetchAnime);
    } else {
      let error = null;
      if ("error" in responselist) {
        error = responselist.error
      }
      setFetchAnimeList({
        data: [],
        loading: false,
        error,
      });
    }
  };
  const fitlerAnime = (
    keyword: String,
    type: String,
    sort: "id" | "title",
    season: String
  ) => {
    console.log("keyword:", keyword);
    console.log("type:", type);
    console.log("sort:", sort);
    console.log("season:", season);
    const keywordFilter = fetchAnime.data.filter((item) =>
      item.title.toLowerCase().includes(keyword?.toLowerCase())
    );
    console.log("keywordFilter", keywordFilter);
    const typeFilter =
      type !== "Type"
        ? keywordFilter.filter((item) =>
          item.type.toLowerCase().includes(type.toLowerCase())
        )
        : keywordFilter;
    console.log("typeFilter:", typeFilter);
    const seasonFilter =
      season !== "Season"
        ? typeFilter.filter((item) =>
          item.season?.toLowerCase().includes(season?.toLowerCase())
        )
        : typeFilter;
    console.log("seasonFilter:", seasonFilter);
    return sortBy(seasonFilter, sort);
  };

  const sortBy = (data: IAnimeDetailItem[], type: "id" | "title") => {
    switch (type) {
      case "id":
        return data.sort((a, b) => a.mal_id - b.mal_id);
      case "title":
        return data.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );
      default:
        return data.sort((a, b) => a.mal_id - b.mal_id);
    }
  };
  useEffect(() => {
    callData(AnimeList[animePull]);
  }, [animePull]);
  useEffect(() => {
    const data = fitlerAnime(keyword, type, sort, season);
    setAnimeList({ data: data, loading: false, error: null });
    console.log("data", data);
  }, [keyword, type, sort, season]);
  return {
    fieldKeyword: register("keyword"),
    fieldSeason: register("season"),
    fieldSort: register("sort"),
    fieldType: register("type"),
    fieldAnimePull: register("animePull"),
  };
};

export { useSearhForm };
