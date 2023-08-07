// c52aac538904a08747df5e8da7018b07;
import axios from "axios";
import "./Home.scss";
import React, { useEffect, useState } from "react";
import DayTrend from "../components/trending/DayTrend";
import WeekTrend from "../components/trending/WeekTrend";
import TvPop from "../components/trending/TvPop";

const Home = () => {
  const [dayTrend, setDayTrend] = useState([])
  const [weekTrend, setWeekTrend] = useState([])
  const [searchkey, setSearchkey] = useState('Avatar');
  const [tvPop, setTvPop] = useState([]);
  // const [searchMovie, setSearchMovie] = useState('');
  const [trend, setTrend] = useState();
  const [defaultM, setDefaultM] = useState(true);
  const [trendStyle, setTrendStyle] = useState({
    day:'gradient day',
    week:'day'
  });
  const [loader, setLoader] = useState({
    day:true,
    week:true,
    tvPop:true
  });
  // console.log(trend);

  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/trending/all/day", {
      params: {
        api_key: "c52aac538904a08747df5e8da7018b07",
      },
    })
    .then(res=>res)
    .then(data=> 
      setDayTrend(data.data.results),
      setLoader({day:false})
    )

    axios
      .get("https://api.themoviedb.org/3/trending/all/week", {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res)
      .then(
        (data) => setWeekTrend(data.data.results),
        setLoader({ week: false }),
      );

    axios
      .get(`https://api.themoviedb.org/3/tv/popular`, {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res)
      .then((data) => setTvPop(data.data.results), setLoader({ tvPop: false }));

    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${searchkey}`, {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
          // query: searchKey
        },
      })
      .then((res) => res)
      .then((data) => console.log(data));

    
  },[])
  console.log(searchkey);
  // console.log(tvPop);

  const homeHero = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/sa9vB0xb3OMU6iSMkig8RBbdESq.jpg)`,
  };


  
  const handleWeek =()=>{
    setTrend(<WeekTrend weekTrend={weekTrend}  />);
    setDefaultM(false)
    setTrendStyle({
      day:'day',
      week:'gradient day'
    })
    
  }
  const handleDay =()=>{
    setTrend(<DayTrend dayTrend={dayTrend}/>);
        setDefaultM(false);
        setTrendStyle({
          day: "gradient day",
          week: "day"
        });

    console.log(trend);
  }

  // const searchMovies =(e)=>{
  //     e.preventDefault()
  // }

  return (
    <div>
      <div className="home-hero" style={homeHero}>
        <div className="home-blur">
          <div className="container">
            <h1 className="home-title">Welcome.</h1>
            <h2 className="home-subtitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
            <form>
              <input
                type="search"
                placeholder="Search for a movie, tv show, person . . ."
                onChange={(e) => setSearchkey(e.target.value)}
              />
              <button className="search-btn">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="trending">
        <div className="container">
          <div className="home-trend flex-column flex-sm-row">
            <h2 className="trending-title">Trending</h2>
            <div className="dayWeek">
              <span className={trendStyle.day} onClick={handleDay}>
                Today{" "}
              </span>
              <span className={trendStyle.week} onClick={handleWeek}>
                This Week
              </span>
            </div>
          </div>
          {loader?.day ? (
            <h1>LOADING...</h1>
          ) : (
            <div>
              {trend}
              {defaultM && (
                <DayTrend dayTrend={dayTrend} trendStyle={trendStyle} />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="trending">
        <div className="container">
          <div className="home-trend flex-column flex-sm-row">
            <h2 className="trending-title">What's Popular</h2>
            <div className="dayWeek">
              <span className="day2" onClick={handleDay}>
                On TV{" "}
              </span>
            </div>
          </div>
          {loader?.day ? <h1>LOADING...</h1> : <TvPop tvPop={tvPop} />}
        </div>
      </div>
    </div>
  );
};


export default Home;
