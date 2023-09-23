import React from 'react'
import { BG_URL } from '../utils/constants'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
          <div className="absolute -z-10 h-1">
        <img
          src={BG_URL}
          alt="background"
        />
      </div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch