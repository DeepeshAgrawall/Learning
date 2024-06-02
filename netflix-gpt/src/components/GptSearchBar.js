import React from "react";
import { useSelector } from 'react-redux';
import languages from "../utils/languageConstants"

const GptSearchBar = () => {
    const lang = useSelector(store => store.config.lang)

  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input className="p-4 m-4 col-span-8" type="text" name="search" placeholder={languages[lang].gptSearchPlaceHolder}/>
     <button className="py-2 m-4 col-span-4 px-4 bg-red-700 text-white rounded">
        {languages[lang].search}
     </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
