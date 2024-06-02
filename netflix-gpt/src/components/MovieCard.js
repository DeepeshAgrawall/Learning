import React from 'react'
import {IMG_CDN_URL} from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 p-1'>
      <img src = {IMG_CDN_URL + posterPath}alt="Movie Image"/>
    </div>
  )
}

export default MovieCard