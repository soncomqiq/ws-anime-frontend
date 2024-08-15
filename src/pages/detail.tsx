import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimeDetailItem } from "../Interface/AnimeDetail";
import { animeDetailService } from "../services/AnimeDetail";
import ReadMore from "../component/ReadMore";

type AnimeType = {
  data: IAnimeDetailItem | undefined;
  loading: boolean;
  error: null | any;
};

const DetailPage = () => {
  const { mal_id } = useParams();
  const [anime, setAnime] = useState<AnimeType>({
    data: undefined,
    loading: true,
    error: null,
  });
  const callData = async (mal_id: number) => {
    const response = await animeDetailService.getAnimeDetail(mal_id);
    console.log(response.data);
    if (response.status === 200) {
      if (response.data)
        setAnime({
          data: {
            ...response.data.data,
            image: response.data.data.images.webp.image_url,
          },
          loading: false,
          error: null,
        });
    } else {
      setAnime({ data: undefined, loading: false, error: null });
    }
  };
  useEffect(() => {
    callData(Number(mal_id));
  }, [mal_id]);
  console.log(mal_id);
  return (
    <div className="bg-gray-700 min-h-[130vh]">
      <div className="w-[90%] m-[auto] max-w-[1100px]">
        <Link
          to={"/"}
          className="bg-[#4CAFEB] px-[16px] py-[4px] rounded-[16px]"
        >
          Back
        </Link>
        <div className="flex justify-center">
          <h3 className="bg-gray-500"></h3>
        </div>

        {anime.data && (
          <div className="w-[90%] max-w-[600px] m-auto">
            <div className="rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] m-auto">
              <div className="bg-center aspect-square w-full bg-cover rounded-[20px] relative h-[400px]">
                <img
                  className="absolute rounded-t-lg h-[50%] sm:h-[250px]  translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                  src={anime.data.image}
                  alt=""
                />
              </div>
              <div className="pt-5 bg-[#253641] rounded-[20px] p-[16px] my-[20px]">
                <div className="flex justify-between">
                  <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-white">
                    {anime.data.title}
                  </h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                    #{anime.data.mal_id}
                  </h5>
                </div>
                <div className="grid grid-cols-1 gap-x-[20px] gap-y-[20px]">
                  <div className="flex justify-between">
                    <div className="">
                      <div className="flex gap-x-[10px]">
                        <div className="text-[#4CAFFB] font-semibold">
                          Score:
                        </div>
                        <div className="text-white">{anime.data.score}</div>
                      </div>
                      <div className="flex gap-x-[10px]">
                        <div className="text-[#4CAFFB] font-semibold">
                          Rank:
                        </div>
                        <div className="text-white">{anime.data.rank}</div>
                      </div>
                      <div className="flex gap-x-[10px]">
                        <div className="text-[#4CAFFB] font-semibold">
                          Duration:
                        </div>
                        <div className="text-white">{anime.data.duration}</div>
                      </div>
                      <div className="flex gap-x-[10px]">
                        <div className="text-[#4CAFFB] font-semibold">
                          Episode:
                        </div>
                        <div className="text-white">{anime.data.episodes}</div>
                      </div>
                      <div className="flex gap-x-[10px]">
                        <div className="text-[#4CAFFB] font-semibold">
                          Rating:
                        </div>
                        <div className="text-white">{anime.data.rating}</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-end mt-[16px]">
                      <span className="bg-green-300 px-[14px] capitalize py-1 rounded-[16px] h-[35px] text-center">
                        {anime.data.type}
                      </span>
                      <span className="bg-orange-300 px-[14px] capitalize py-1 rounded-[16px] h-[35px]">
                        {anime.data.season}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-xl">
                      Background
                    </h5>
                    <ReadMore limit={200} text={anime.data.synopsis}>
                      {/* <span className="capitalize mb-2 text-l tracking-tight text-white">
                      {anime.data.synopsis}
                    </span> */}
                    </ReadMore>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
