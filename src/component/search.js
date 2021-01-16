import React, { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
import "./Home/Row.css";
import Row from "./Home/Row";
import ScrollContainer from "react-indiana-drag-scroll";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import requests from "../api/requests";
import colors from '../assets/colors';
import Nav from "./Home/Nav";
const base_url = "https://image.tmdb.org/t/p/original/";
const API_KEY = "04ae7689fc21853d7db93ebc5e887fa0";

function Search({title='The Movie Db', isLargeRow}) {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const fetchUrl = requests.fetchNetflixOriginals;
    const [trailerUrl, setTrailerUrl] = useState("");
    const headerRef = useRef(null);
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

    const searchMovies = async (e) => {
        e.preventDefault(); 

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();

            const srcresult = await axios.get(url);
            setMovies(srcresult.data.results);

            console.log(query, data,srcresult.data.results);


        }catch(err){
            console.error(err);
        }
        

    }

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovies(request.data.results);
        }
        fetchData();
      }, [fetchUrl]);

      useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
        handleScroll(header.top, header.height)
        }
    
        window.addEventListener('scroll', ()=> {
          handleScrollEvent();
        });
    
        return () => {
        window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    const youtubeOpts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
        } else {
        setSticky({ isSticky: false, offset: 0 });
        }
    };

    const movieClicked = (moviename) => {
        console.log(moviename);
        if (trailerUrl !== "") setTrailerUrl("");
        else {
          movieTrailer(moviename)
            .then((url) => {
              const urlParamV = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParamV.get("v"));
            })
            .catch((err) => console.log(err));
        }
      };

    return (
         <>
            <Nav className={`${sticky.isSticky ? 'sticky' : ''}`} refCallback={headerRef} searchScreen/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: 10,
                padding:10
            }}>
                <h2>{title}</h2>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: 10,
                padding:10
            }}>
                
                <input
                    className="search-input"
                    type="text"
                    name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{width:'70%'}}
                />
                <button 
                    style={{
                        height: 34,
                        marginLeft: 5,
                        backgroundColor: colors.orange,
                        borderColor: colors.orange,
                        borderRadius: 5,
                        color: colors.white,
                        fontWeight: 'bolder',
                        cursor:'pointer'
                    }} 
                    onClick={searchMovies}
                >Search</button>
            </div> 
            <div className="row">
                <ScrollContainer className="row__posters">
                    {/* <div className="row__posters"> */}
                    {movies.map((movie) => (
                    <img
                        onClick={() =>
                        movieClicked(movie.name || movie.title || movie.orginal_name)
                        }
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} //use && if theres no else or : otherwise use ?
                        src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                    ))}
                    {/* </div> */}
                </ScrollContainer>
                {trailerUrl !== "" && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
            </div>

            <Row isLargeRow title="What's Popular" fetchUrl={requests.fetchNetflixOriginals} />

         </>
    )
}
 
export default Search;