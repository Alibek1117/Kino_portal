import React from 'react'
import { Link } from 'react-router-dom';
import UserScore from '../UserScore';

const TvPop = ({tvPop}) => {
  return (
    <div className="movie-cards">
      {tvPop?.map((movie) => (
        <Link to={`/home/${movie.id}`} key={movie.id}>
          <div className="movie-card ">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt="imgs"
            />
            <div className="card-title ">
              <h3 className="rating">
                <UserScore>{movie.vote_average}</UserScore>
              </h3>

              <h3 className="title">{movie.name}</h3>
              <h3 className="date text-black">{movie.first_air_date}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TvPop