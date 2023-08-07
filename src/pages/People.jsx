import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./People.scss";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/person/popular", {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res)
      .then((data) => setPeople(data.data.results));
  }, []);
  console.log(people);
  return (
    <div className="container">
      <div className="people-cards row">
        {people?.map((person) => (
          <Link
            to={`/people-single/${person.id}`}
            key={person.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div className="people-card ">
              <img
                src={`https://www.themoviedb.org/t/p/w235_and_h235_face/${person.profile_path}`}
                alt="imgs"
              />
              <div className="people-title ">
                <h3 className="name">{person.name}</h3>
                <span className="title ">
                  {person.known_for.map((item, index) => (
                    <span key={index}>{item.title} , </span>
                  ))}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default People;
