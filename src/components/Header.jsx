import { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState([]);
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(search);
  const handleSubmit = (e) => {
    // e.preventDefault()
    if (search.length > 0) {
      navigate(`/search/${search}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="header">
      <div className="container">
        <NavLink to="/">
          <h2 className="logo">Movie-App</h2>
        </NavLink>
        <form className="header-form d-none d-md-block" onSubmit={handleSubmit}>
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
        <i
          className="fa-solid fa-bars d-sm-none"
          onClick={() => setMenu(true)}
        ></i>
        {menu && (
          <div className="menu-bar">
            <ul>
              <NavLink to="/">
                <li onClick={() => setMenu(false)}>
                  <i class="fa-solid fa-house"></i> <span>Home</span>
                </li>
              </NavLink>
              <NavLink to="/movie">
                <li onClick={() => setMenu(false)}>
                  <i class="fa-solid fa-film"></i>
                  <span>Movie</span>
                </li>
              </NavLink>
              <NavLink to="/people">
                <li onClick={() => setMenu(false)}>
                  <i class="fa-solid fa-users"></i>
                  <span>People</span>
                </li>
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
