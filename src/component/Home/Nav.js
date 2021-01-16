import React from "react";
import "./Nav.css";
import { IconContext } from "react-icons";
import { IoIosSearch } from 'react-icons/io';
import { Link } from "react-router-dom";
import colors from '../../assets/colors';
function Nav(props) { 
  const link = "#"; 

  return (
    <nav 
      className={`${props.className}`}
      ref= {props.refCallback}
    >
      <div className="nav__contents">
      {/* nav__logo */}
          <img
            alt=""
            className=""
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            width="154" 
            height="20"
          /> 
        <div className="nav__menu"> 
          <a href={link} className="nav__button">Movies</a>
          <a href={link} className="nav__button">TV Shows</a>
          <a href={link} className="nav__button">People</a>
          <a href={link} className="nav__button">More</a>
          <a href={link} className="nav__button">Login</a>
          <a href={'register'} className="nav__button">Join TMDB</a>
          
        </div>  
      </div>
      {!props.searchScreen &&
        <div style={{display: 'flex', alignItems: 'flex-end',justifyContent: 'flex-end'}}>
          <Link to="/search">
            <div className="search-btn search-btn-wrap" style={{cursor:'pointer', backgroundColor:colors.white}}>
              <IconContext.Provider value={{ color: "grey", size:25 }}>
                <IoIosSearch />
              </IconContext.Provider>
            </div>
          </Link>
        </div>
      } 
    </nav>
  );
}

export default Nav;
