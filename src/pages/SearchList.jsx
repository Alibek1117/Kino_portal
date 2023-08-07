import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import UserScore from "../components/UserScore";

const SearchList = () => {
    const [searched, setSearched]=useState([])
    const {id} = useParams()
    useEffect(()=>{
        axios
          .get(`https://api.themoviedb.org/3/search/movie?query=${id}`, {
            params: {
              api_key: "c52aac538904a08747df5e8da7018b07",
            },
          })
          .then((res) => res)
          .then((data) => setSearched(data.data.results));

    },[])
    // console.log(searched);
  return (
    <div className="movie-cardsP row ">
      {searched.map((movie) => (
        <Link
          to={`/movie-single/${movie.id}`}
          key={movie.id}
          className=" col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <div className="movie-card ">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
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

export default SearchList;
