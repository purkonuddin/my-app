import React, {useState, useRef, useEffect} from 'react';
import "./Home.css";
import Row from "./Row";
import requests from "../../api/requests";
import Banner from "./Banner";
import Nav from "./Nav";

function Home() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);
  // const [navbarBlack, setNavbarBlack] = useState(false);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
      if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
      } else {
      setSticky({ isSticky: false, offset: 0 });
      }
  };

  // add/remove scroll event listener
  useEffect(() => {
      var header = headerRef.current.getBoundingClientRect();
      const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
      }
  
      window.addEventListener('scroll', ()=> {
        handleScrollEvent();
        // setNavbarBlack(true);
      });
  
      return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      };
  }, []);

  // const link = "#";
  
  return (
    <div className="app" style={{ marginTop: sticky.offset }}>
      <Nav className={`${sticky.isSticky ? 'sticky' : ''}`} refCallback={headerRef}/>
      <Banner /> 
      <Row 
        isLargeRow
        title="What's Popular" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Free To Watch" fetchUrl={requests.fetchTrending} />
      <Row title="Latest Trailers" fetchUrl={requests.fetchActionMovies} />
      <Row title="Trending" fetchUrl={requests.fetchComedyMovies} /> 
    </div>
  );
}

export default Home;
