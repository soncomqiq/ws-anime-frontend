import { Link } from "react-router-dom";
import { AnimeList, SeasonList, SortList, TypeList } from "../Util/OptionList";
import { useSearhForm } from "./Searchform.hook";

const Searchform = () => {
  const { fieldAnimePull, fieldKeyword, fieldSort, fieldSeason, fieldType } =
    useSearhForm();
  return (
    <nav className="">
      <div className="flex justify-between text-xl w-full">
        <div className="flex mt-1">
          <Link to={`/`} className="m-5">
            Home
          </Link>
          <Link to={`/favorite`} className="m-5">
            Favorites
          </Link>
          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            {...fieldAnimePull}
            id="underline_select"
            className="dark:bg-red-800 text-xl block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            {AnimeList.map((item, index) => {
              return (
                <option key={`anime-key-${index}`} value={index} selected>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <form className="flex text-xl gap-x-[40px] ">
          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            {...fieldSort}
            id="underline_select"
            className="dark:bg-red-800 text-xl block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            {SortList.map((item, index) => {
              return (
                <option key={`sort-key-${index}`} value={item} selected>
                  {item}
                </option>
              );
            })}
          </select>
          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            {...fieldSeason}
            id="underline_select"
            className="dark:bg-red-800 text-xl block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            {SeasonList.map((item, index) => {
              return (
                <option key={`season-key-${index}`} value={item.name} selected>
                  {item.name}
                </option>
              );
            })}
          </select>
          <select
            {...fieldType}
            id="underline_select"
            className="dark:bg-red-800 text-xl block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            {TypeList.map((item, index) => {
              return (
                <option key={`type-key-${index}`} value={item} selected>
                  {item}
                </option>
              );
            })}
          </select>
        </form>
        <div className="">
          <input
            {...fieldKeyword}
            id="generation"
            className="text-black my-6 mr-7 bg-white rounded-md"
          />
          <span className="text-l my-5 mr-7 text">Search</span>
        </div>
      </div>
    </nav>
  );
};

export default Searchform;
