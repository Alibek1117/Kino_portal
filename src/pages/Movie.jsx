import './Movie.scss'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import MovieCard from '../components/MovieCard'
import PopCorusel from '../components/PopCorusel'


const Movie = () => {
    const[movies, setMovies] = useState([])
    const[loader, setLoader] = useState(true)
    useEffect(()=>{
        axios
          .get("https://api.themoviedb.org/3/movie/popular", {
            params: {
              api_key: "c52aac538904a08747df5e8da7018b07",
            },
          })
          .then((res) => res)
          .then((data) => setMovies(data.data.results), setLoader(false))
          .catch((err) => console.log(err.message));

        
    },[])
   if (loader) {return <h1>LOADING...</h1>}
   console.log(movies);
  return (
    <div className="container movie-full">
      <PopCorusel movies={movies} />
      <MovieCard movies={movies} />
    </div>
  );
}

export default Movie