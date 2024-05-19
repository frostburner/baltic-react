import React from 'react';
import Nav from './Nav';
import CountryContainer from './CountryContainer';

const Home = () => {
  return (
    <>
      <div className="container"> {/* Combined class names */}
        <img src="../src/assets/media/balticbites2.png" alt="Shop Logo" className="logo" />
        <h1 className="slogan">Bake the World a Better Place</h1>
        <div className="search-box">
          <form id="search-form">
            <input type="search" placeholder="Search for recipe here" className="search-input" id="search-input" />
            <button type="submit" className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <video autoPlay loop muted className="bg-vid">
          <source src="../src/assets/media/bg_vid.mp4" type="video/mp4" />
        </video>
      </div>
      <Nav />
      <CountryContainer />
    </>
  );
};

export default Home;
