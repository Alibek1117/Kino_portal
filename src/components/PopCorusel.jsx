import React from 'react'
import SingleMovie from '../pages/SingleMovie';
import { Link } from 'react-router-dom';

const PopCorusel = ({movies}) => {
    console.log(movies, 'saolmn');



    // const singleCard = {
    //   backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
    // }
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="carusel-img"
              src={`https://image.tmdb.org/t/p/original${movies[8]?.backdrop_path}`}
              alt="img"
            />
          </div>
          {movies?.map((movie) => (
            <div className="carousel-item" key={movie.id}>
              <Link to={`/movie-single/${movie.id}`}>
                <img
                  className="carusel-img"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt="img"
                />
              </Link>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default PopCorusel