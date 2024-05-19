import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="#home">Home</Link>
      <Link to="#about">About</Link>
      <Link to="#contact">Contact Us</Link>
    </div>
  );
}

export default Navigation;
