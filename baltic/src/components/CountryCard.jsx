import React from 'react';

const CountryCard = ({ imgSrc, linkTo, countryName }) => {
  return (
    <div className="cc">
      <img src={imgSrc} alt={countryName} />
      <a href={linkTo} className={`${countryName.toLowerCase()}-link`}>
        <div className="overlay">{countryName}</div>
      </a>
    </div>
  );
}

export default CountryCard;
