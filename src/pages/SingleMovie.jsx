import "./SingleMovie.scss";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserScore from "../components/UserScore";
import Loader from "../components/Loader";
// import YouTube from "react-youtube";

const SingleMovie = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState({});
  const [loader, setLoader] = useState(true);
  const [youTube, setYouTube] = useState(false);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res)
      .then((data) => {
        console.log(data);
        setMovies(data.data);
        data.status === 200 && data.request.readyState === 4
          ? setLoader(false)
          : setLoader(true);
      })
      .catch((err) => {
        console.log(err.message);
        setLoader(false)
      });


    axios
      .get(`https://api.themoviedb.org/3/tv/${id}`, {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res)
      .then((data) => setMovies(data.data), setLoader(false))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(movies);
  const singleCard = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movies.backdrop_path})`,
  };
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="single-card" style={singleCard}></div>

          <div className="blur-card">
            <div className="container row">
              <div className="blur-left col-12 col-md-4">
                <img
                  //https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg
                  src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
                  alt="imgs"
                />
              </div>
              <div className="blur-right col-12 col-md-8 px-6">
                <h2 className="right-title">
                  {movies.original_name
                    ? movies.original_name
                    : movies.original_title}

                  <span className="title-year">
                    (
                    {(movies.release_date
                      ? movies.release_date
                      : movies.last_air_date
                    )?.slice(0, 4)}
                    )
                  </span>
                </h2>
                <div className="right-subtitle">
                  <span>
                    (
                    {movies.release_date
                      ? movies.release_date
                      : movies.last_air_date}
                    )
                  </span>
                  <span className="point"></span>
                  <span className="lang">({movies.original_language})</span>
                </div>
                <span className="genres">
                  Genre:
                  {movies?.genres?.map((genre) => (
                    <span key={genre.id}> {genre.name}, </span>
                  ))}
                </span>
                <div className="right-rating">
                  <UserScore>{movies.vote_average}</UserScore>
                  <span className="score-title">
                    User <br /> Score
                  </span>
                  <button className="trailer" onClick={() => setYouTube(true)}>
                    <i className="fa-solid fa-play"></i>
                    <h3>Play Trailer</h3>
                  </button>
                  {youTube && (
                    <div className="youTube" onClick={() => setYouTube(false)}>
                      {/* <YouTube /> */}
                    </div>
                  )}
                </div>
                <i className="tagline">{movies.tagline}</i>

                <div className="overview">
                  <h2>Overview</h2>
                  <p>{movies.overview}</p>
                </div>
              </div>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
};
{
}

export default SingleMovie;
