import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IAnimeDetailItem } from "../Interface/AnimeDetail";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export interface AnimeCardProps {
  data: IAnimeDetailItem;
}

const AnimeCard = ({ data }: AnimeCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favoriteIds: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorited(favoriteIds.includes(data.mal_id));
  }, [data.mal_id]);

  const handleFavoriteClick = () => {
    const favoriteIds: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const newFavoriteStatus = !isFavorited;
    if (newFavoriteStatus) {
      if (!favoriteIds.includes(data.mal_id)) {
        favoriteIds.push(data.mal_id);
      }
    } else {
      const index = favoriteIds.indexOf(data.mal_id);
      if (index !== -1) {
        favoriteIds.splice(index, 1);
      }
    }

    localStorage.setItem("favorites", JSON.stringify(favoriteIds));
    setIsFavorited(newFavoriteStatus);
  };
  return (
    <div className="rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[4px] bg-[#253641] max-w-[275px] m-auto relative gap-y-[10px]">
      <Link to={`/detail/${data.mal_id}`}>
        <img
          className="rounded-[20px] h-[218px] w-full"
          src={data.image}
          alt=""
        />
      </Link>
      <button
        onClick={handleFavoriteClick}
        className="absolute top-[10px] right-[10px]"
      >
        <FontAwesomeIcon
          icon={faStar}
          className={isFavorited ? "text-yellow-500" : "text-gray-500"}
        />
      </button>
      <div className="absolute bg-black bg-opacity-65 bottom-[1px] w-full">
        <h5 className="capitalize mb-2 text-l font-bold tracking-tight text-white">
          {data.title}
        </h5>
      </div>
    </div>
  );
};
export default AnimeCard;
