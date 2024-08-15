import { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import { animeDetailService } from "../services/AnimeDetail";
import { IAnimeDetailItem } from "../Interface/AnimeDetail";
import { Link } from "react-router-dom";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState<IAnimeDetailItem[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      // console.log("Fetching favorites...");
      const favoriteIds: number[] = JSON.parse(
        localStorage.getItem(`favorites`) || "[]"
      );
      // console.log(favoriteIds);
      const favoriteData: IAnimeDetailItem[] = [];

      if (favoriteIds.length === 0) {
        // console.log("No favorite IDs found.");
        setFavorites(favoriteData);

        return;
      }

      try {
        // Batch requests if necessary to optimize performance
        const results = await Promise.all(
          favoriteIds.map((id) => animeDetailService.getAnimeDetail(id))
        );

        results.forEach((result) => {
          if (result) {
            favoriteData.push({
              ...result.data.data,
              image: result.data.data.images.webp.image_url,
            });
          } else {
            // console.log("Error fetching some of the favorite anime details.");
          }
        });
      } catch (err: any) {
        // console.log("Error fetching some of the favorite anime details.");
      }
      // console.log("Favorite Data:", favoriteData);
      setFavorites(favoriteData);
    };

    fetchFavorites();
  }, []);

  return (
    <div className="bg-repeat bg-[url('/picture/anime.jpg')] min-h-[110vh] bg-black">
      <div className="h-110">
        <header className="bg-red-800 text-rose-50 text-xl w-full h-[76px] flex items-center">
          <Link to={`/`} className="m-5">
            Home
          </Link>
          <Link to={`/favorite`} className="m-5">
            Favorites
          </Link>
        </header>
        <div className="mt-[20px] text-gray-200 flex justify-center text-2xl border-slate-300">
          <h3 className="bg-gray-500">AnimeRank</h3>
        </div>
        <div className="flex mt-[30px] ml-[30px]">
          <span className="flex bg-gray-600 gap-x-[10px]">
            {favorites.length > 0 ? (
              favorites.map((item) => {
                return <AnimeCard data={item} key={item.mal_id} />;
              })
            ) : (
              <p>No favorites yet!</p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
