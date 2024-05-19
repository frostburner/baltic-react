import React from 'react';
import './estonia-css.css';
import recipe1 from '../assets/estonia-recipe/E-Pirukad.png'
import recipe2 from '../assets/estonia-recipe/E-Kama.png'
import recipe3 from '../assets/estonia-recipe/E-SpottedDog.png'
import recipe4 from '../assets/estonia-recipe/E-Vastlakukkel.png'
import { Link } from 'react-router-dom';

const EstoniaPage = () => {
  return (
    <>
  <div className="container">
      <h1 className="slogan">Traditional Recipes from Estonia</h1> 
    </div>
    
   

<div className="content-container">
      <div className="recipe-container">
        {/* Recipe 1 */}
        <div className="recipe">
          <img src={recipe1} alt="Estonian Recipe 1" />
          <div className="recipe-details">
            <h2>Pirukad</h2>
            <p>Description of Recipe 1</p>
            <Link to="/pirukad" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Recipe 2 */}
        <div className="recipe">
          <img src={recipe2} alt="Estonian Recipe 2" />
          <div className="recipe-details">
            <h2>Kama</h2>
            <p>Description of Recipe 2</p>
            <Link to="/kama" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Second Row: Recipe 3 */}
        <div className="recipe">
          <img src={recipe3} alt="Estonian Recipe 3" />
          <div className="recipe-details">
            <h2>Kirju Koer</h2>
            <p>Description of Recipe 3</p>
            <Link to="/kirju" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Recipe 4 */}
        <div className="recipe">
          <img src={recipe4} alt="Estonian Recipe 4" />
          <div className="recipe-details">
            <h2>Vastlakukkel</h2>
            <p>Description of Recipe 4</p>
            <Link to="/vastla" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>
      </div>
      <div className="back-button-container">
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
      <video autoPlay loop muted className="bg-vid">
          <source src="../src/assets/media/Estonia-flag.mp4" type="video/mp4" />
        </video>
    </div>
    </>
  );
};

export default EstoniaPage;
