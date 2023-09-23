import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies)
  const popular_movies=useSelector(store=>store.movies?.popularMovies)
  console.log("movies",movies)
  return (
    <div className=' bg-black'>
    <div className='-mt-72 pl-10 relative z-20'>
    <MovieList title={"Now Playing"} movies={movies}/>
    <MovieList title={"Popular Movies"} movies={popular_movies}/>
    <MovieList title={"Upcoming Movies"} movies={movies}/>
    <MovieList title={"Horror"} movies={popular_movies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer