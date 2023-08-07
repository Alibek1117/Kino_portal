import { useEffect, useState } from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

const Header = () => {
  const [search, setSearch] = useState([])
  const [menu, setMenu] = useState(false)
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
  const menuBar =(e)=>{
    // e.stopPropagation();
    setMenu(true)
    // console.log(e);
  }
  console.log(search);
  return (
    <div className="header" onMouseDown={()=>setMenu(false)}>
      <div className="container">
        <NavLink to="/">
          <h2 className="logo">Movie-App</h2>
        </NavLink>
        <form className="header-form d-none d-md-block">
          <input
            className="search-input"
            placeholder={` Search...`}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <ul className="d-none d-sm-flex main-nav">
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
        <i className="fa-solid fa-bars d-sm-none" onClick={()=>setMenu(true)}></i>
        {menu&&<div className="menu-bar">
          <ul>
            <NavLink to="/">
              <li>
                <i class="fa-solid fa-house"></i> <span>Home</span>
              </li>
            </NavLink>
            <NavLink to="/movie">
              <li>
                <i class="fa-solid fa-film"></i>
                <span>Movie</span>
              </li>
            </NavLink>
            <NavLink to="/people">
              <li>
                <i class="fa-solid fa-users"></i><span>People</span>
              </li>
            </NavLink>
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default Header