import React from 'react';
import CountryCard from './CountryCard';
import estoniaImg from '../assets/media/estonia-home.png'
import latviaImg  from '../assets/media/latvia-home.png'
import lithuaniaImg from '../assets/media/lithuania-home.png'

const CountryContainer = () => {
  return (
    <div className="country-container">
      <CountryCard imgSrc={estoniaImg} linkTo="/estonia" countryName="Estonia" />
      <CountryCard imgSrc={latviaImg} linkTo="/latvia" countryName="Latvia" />
      <CountryCard imgSrc={lithuaniaImg} linkTo="/lithuania" countryName="Lithuania" />
    </div>
  );
}

export default CountryContainer;
