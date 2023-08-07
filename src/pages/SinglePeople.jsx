import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SinglePeople.scss'

const SinglePeople = () => {
  const {id} = useParams()
  const [people, setPeople] = useState()
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/person/${id} `, {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res)
      .then((data) => setPeople(data.data), setLoader(false));

      // .catch((err) => console.log(err.message));
  }, []);
  // let a = people.filter(item =>  item.id === id)
  console.log(people); 
  const today =new Date().getFullYear()
  if (loader) { return <h1>LOADER...</h1>}
  return (
    <div className="container">
      <div className="single-actor">
        <div className="actor-left">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${people?.profile_path}`}
            alt="dd"
          />
          <h2 className="personal-info">Personal Info</h2>
          <h3 className="info-title">Known For</h3>
          <p>{people?.known_for_department}</p>
          <h3 className="info-title">Gender</h3>
          <p>{people?.gender === 1 ? "Female" : "Male"}</p>
          <h3 className="info-title">Birthday</h3>
          <p>
            {people?.birthday} ({today - Number(people?.birthday?.slice(0, 4))}{" "}
            years old)
          </p>
          <h3 className="info-title">Place of Birth</h3>
          <p>{people?.place_of_birth}</p>
          <h3 className="info-title">Also Known As</h3>
          {people?.also_known_as.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="actor-right">
          <h1 className="actor-name">{people?.name}</h1>
          <h3 className="biography-title">Biography</h3>
          <p className="biography-subtitle">{people?.biography}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePeople