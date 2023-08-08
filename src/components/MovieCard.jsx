import React from "react";
import { Link } from "react-router-dom";
import UserScore from "./UserScore";

const MovieCard = ({ movies }) => {
   
  return (
    <div className="movie-cardsP row ">
      {movies.map((movie) => (
        <Link
          to={`/movie-single/${movie.id}`}
          key={movie.id}
          className=" col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <div className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="imgs"
            />
            <div className="card-title ">
              <h3 className="rating">
                <UserScore>{movie.vote_average}</UserScore>
              </h3>
              <h3 className="title">{movie.title}</h3>
              <h3 className="date text-black">{movie.release_date}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCard;
