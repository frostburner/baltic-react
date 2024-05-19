import React from 'react';
import './latvia-css.css';
import recipe1 from '../assets/latvia-recipe/Lv-CaramelCookies.png'
import recipe2 from '../assets/latvia-recipe/Lv-ChocolateKissel.png'
import recipe3 from '../assets/latvia-recipe/Lv-HoneyCake.png'
import recipe4 from '../assets/latvia-recipe/Lv-Honey.png'
import { Link } from 'react-router-dom';


const LatviaPage = () => {
  return (
    <>
  <div className="container">
      <h1 className="slogan">Traditional Recipes from Latvia</h1> 
    </div>
    
   

<div className="content-container">
      <div className="recipe-container">
        {/* Recipe 1 */}
        <div className="recipe">
          <img src={recipe1} alt="Estonian Recipe 1" />
          <div className="recipe-details">
          <h2>Riekstini</h2>
        <p>Latvian caramelized nuts, typically made with a mixture of nuts, sugar, and spices, resulting in a crunchy and flavorful snack enjoyed by all ages.</p>
        <Link to="/riekstini" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Recipe 2 */}
        <div className="recipe">
          <img src={recipe2} alt="Estonian Recipe 2" />
          <div className="recipe-details">
          <h2>Sokolades Kiselis</h2>
        <p>A traditional Latvian chocolate pudding dessert, often served chilled and made with cocoa, sugar, and gelatin.</p>
        <Link to="/sokolades" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Second Row: Recipe 3 */}
        <div className="recipe">
          <img src={recipe3} alt="Estonian Recipe 3" />
          <div className="recipe-details">
          <h2>Medus Kuka</h2>
        <p>A Latvian honey cake, known for its layers of honey-infused sponge cake and rich buttercream frosting, creating a sweet and indulgent treat.</p>
        <Link to="/medus" className="recipe-button">
               See Recipe
            </Link>
          </div>
        </div>

        {/* Recipe 4 */}
        <div className="recipe">
          <img src={recipe4} alt="Estonian Recipe 4" />
          <div className="recipe-details">
          <h2>Rupjmaize ar medu</h2>
        <p>A Latvian dark rye bread drizzled with honey, offering a perfect blend of earthy flavors and subtle sweetness.</p>
        <Link to="/rup" className="recipe-button">
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
          <source src="../src/assets/media/Latvia-flag.mp4" type="video/mp4" />
        </video>
    </div>
    </>
  );
};

export default LatviaPage;
