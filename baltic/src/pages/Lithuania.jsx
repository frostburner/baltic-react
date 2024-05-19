import React from 'react';
import './lithuania-css.css';
import recipe1 from '../assets/lithuania-recipe/1.png'
import recipe2 from '../assets/lithuania-recipe/2.png'
import recipe3 from '../assets/lithuania-recipe/3.png'
import recipe4 from '../assets/lithuania-recipe/4.png'
import { Link } from 'react-router-dom';


const LithuaniaPage = () => {
  return (
    <>
  <div className="container">
      <h1 className="slogan">Traditional Recipes from Lithuania</h1> 
    </div>
    
   

<div className="content-container">
      <div className="recipe-container">
        {/* Recipe 1 */}
        <div className="recipe">
          <img src={recipe3} alt="Estonian Recipe 1" />
          <div className="recipe-details">
          <h2>Kuršėnų Vyniotinis</h2>
        <p>Description of Recipe 1</p>
        <Link to="/kurs" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Recipe 2 */}
        <div className="recipe">
          <img src={recipe4} alt="Estonian Recipe 2" />
          <div className="recipe-details">
          <h2>Sūreliai </h2>
        <p>Description of Recipe 2</p>
        <Link to="/sureliai" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Second Row: Recipe 3 */}
        <div className="recipe">
          <img src={recipe1} alt="Estonian Recipe 3" />
          <div className="recipe-details">
          <h2>Varškės Apkepas</h2>
        <p>Description of Recipe 3</p>
        <Link to="/var" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Recipe 4 */}
        <div className="recipe">
          <img src={recipe2} alt="Estonian Recipe 4" />
          <div className="recipe-details">
          <h2>Eduoliai</h2>
        <p>Description of Recipe 4</p>
        <Link to="/edu" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>
      </div>
      <div className="back-button-container">
        <a href="/" className="back-button">
          Back to Home
        </a>
      </div>
      <video autoPlay loop muted className="bg-vid">
          <source src="../src/assets/media/Lithuania-flag.mp4" type="video/mp4" />
        </video>
    </div>
    </>
  );
};

export default LithuaniaPage;
