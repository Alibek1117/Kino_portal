import { useEffect, useState } from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

const Header = () => {
  const [search, setSearch] = useState([])
  useEffect(()=>{
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
          // query: searchKey
        },
      })
      .then((res) => res)
      .then((data) => console.log(data));

  },[])
  console.log(search);
  return (
    <div className="header">
      <div className="container">
        <NavLink to="/">
          <h2 className="logo">Movie-App</h2>
        </NavLink>
        <form className='header-form d-none d-md-block' >
          <input
            className="search-input"
            placeholder={` Search...`}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/movie">
            <li>Movie</li>
          </NavLink>
          <NavLink to="/people">
            <li>People</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header