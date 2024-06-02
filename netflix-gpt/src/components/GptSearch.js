import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import {MOVIES_BG_URL} from "../utils/constants"
const GptSearch = () => {
  return (
    <div>
          <div className="absolute -z-20">
        <img src={MOVIES_BG_URL} />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch