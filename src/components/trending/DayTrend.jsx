import React from 'react'
import { Link } from 'react-router-dom';
import UserScore from '../UserScore';

const DayTrend = ({dayTrend}) => {
  return (
    <div className="movie-cards">
      {dayTrend?.map((movie) => (
        <Link to={`/home/${movie.id}`} key={movie.id}>
          <div className="movie-card ">
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
}

export default DayTrend