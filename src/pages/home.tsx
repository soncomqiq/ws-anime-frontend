import AnimeCard from "../AnimeCard/AnimeCard";
import Searchform from "../component/Searchform";
import { useAnimeListStore } from "../store/AnimeList";
import Sidebar from "../Sidebar/Sidebar";

const HomePage = () => {
  // const [anime, setAnime] = useState<IAnimeListItem[]>([]);
  const { anime } = useAnimeListStore();
  // console.log("anime:", Anime);
  // const callData = async () => {
  //   const data = await animeListService.getAnimeList();
  //   console.log("data", data.data.data);
  //   setAnime(data.data.data);
  // };

  // useEffect(() => {
  //   callData();
  // }, []);
  return (
    <div className="bg-repeat bg-[url('/picture/anime.jpg')] min-h-[120vh] bg-black">
      <div className="h-110">
        <header className="bg-red-800 text-rose-50">
          <Searchform />
        </header>
        <div className="mt-[20px] text-gray-200 flex justify-center text-2xl border-slate-300">
          <h3 className="bg-gray-500">AnimeRank</h3>
        </div>
        <section className="h-screen m-[auto] flex flex-col">
          <main className="flex flex-row-reverse">
            <div className="grid grid-cols-5 w-[75%] gap-[10px] mt-[30px]">
              {anime.data &&
                anime.data?.map((item) => {
                  return <AnimeCard data={item} key={item.mal_id} />;
                })}
            </div>
            <aside className="w-[25%] gap-y-[10px] mt-[30px] ml-[30px]">
              <Sidebar />
            </aside>
          </main>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
