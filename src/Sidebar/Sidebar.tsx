import React, { useEffect } from "react";
import { animeListService } from "../services/AnimeList";
import { useAnimeListStore } from "../store/AnimeList";

const Sidebar = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] =
    React.useState("G - All Ages");

  const { fetchAnime, setAnimeList } = useAnimeListStore();
  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);

  useEffect(() => {
    if (fetchAnime.data) {
      const sideFilter = fetchAnime.data.filter(
        (item) => item.rating.toLowerCase() === selectedRadioBtn.toLowerCase()
      );
      setAnimeList({ data: sideFilter, loading: false, error: null });
    }
  }, [selectedRadioBtn, fetchAnime.data, setAnimeList]);

  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Rating
      </h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              value="G - All Ages"
              name="list-radio"
              checked={isRadioSelected("G - All Ages")}
              onChange={handleRadioClick}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="list-radio-license"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              G - All Ages
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-id"
              type="radio"
              value="PG - Children"
              name="list-radio"
              checked={isRadioSelected("PG - Children")}
              onChange={handleRadioClick}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="list-radio-id"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              PG - Children
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-military"
              type="radio"
              value="PG-13 - Teens 13 or older"
              name="list-radio"
              checked={isRadioSelected("PG-13 - Teens 13 or older")}
              onChange={handleRadioClick}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="list-radio-military"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              PG-13 - Teens 13 or older
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-passport"
              type="radio"
              value="R - 17+ (violence & profanity)"
              name="list-radio"
              checked={isRadioSelected("R - 17+ (violence & profanity)")}
              onChange={handleRadioClick}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="list-radio-passport"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              R - 17+ (violence & profanity)
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-passport"
              type="radio"
              value="R+ - Mild Nudity"
              name="list-radio"
              checked={isRadioSelected("R+ - Mild Nudity")}
              onChange={handleRadioClick}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="list-radio-passport"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              R+ - Mild Nudity
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-passport"
              type="radio"
              value="Rx - Hentai"
              name="list-radio"
              checked={isRadioSelected("Rx - Hentai")}
              onChange={handleRadioClick}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="list-radio-passport"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Rx - Hentai
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
