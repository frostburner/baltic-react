import React from 'react';
import './recipe.css'
import NavLogo from '../../assets/lithuania-recipe/balticbites2.png';
import heroImg from '../../assets/lithuania-recipe/4.png'
import { Link } from 'react-router-dom';

function Sureliai() {
  return (
    <div id="container">
      <header>
        <logo>
        <Link to="/">
            <img src={NavLogo} alt="Logo" />
          </Link>
        </logo>
        <nav>
          <ul className="main-menu">
          <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
              <ul className="submenu">
                <li>
                  <a href="/sokolades">Sokolades</a>
                </li>
                <li>
                  <a href="/medus">Medus</a>
                </li>
                <li>
                  <a href="/rup">Rup</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <div className="row title">
        <h3>Sureliai</h3>
      </div>
      <div className="row">
      <div className="left">
          <img src={heroImg} alt="Pikurad" />
        </div>
        <div className="right">
          <h3 className="subtitle">Ingredients:</h3>
          <table className="ingredients-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flour</td>
                <td>4 Cups</td>
              </tr>
              <tr>
                <td>Butter</td>
                <td>75 g</td>
              </tr>
              <tr>
                <td>Full Cream Milk</td>
                <td>1 Cup</td>
              </tr>
              <tr>
                <td>Warm Water</td>
                <td>1/4 Cup</td>
              </tr>
              <tr>
                <td>White Sugar</td>
                <td>1/2 Cup</td>
              </tr>
              <tr>
                <td>Salt</td>
                <td>1 tsp</td>
              </tr>
              <tr>
                <td>Egg</td>
                <td>1 piece</td>
              </tr>
              <tr>
                <td>Breadcrumbs</td>
                <td>Preference</td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: 20 }} />
          <h3 className="subtitle">Steps:</h3>
          <div style={{ marginTop: 20 }} />
          <ol>
            <li>Dissolve the yeast in warm water, set aside until bubbly.</li>
            <li>Mix in milk, egg, sugar and melted butter.</li>
            <li>
              In a clean and flat surface place flour and salt then make a well
              in a middle, pour the liquid in the center and start combining the
              wet and dry ingredients.
            </li>
            <li>
              Knead the dough for 15 minutes until it resembles a soft clay.
              Place flour on the surface if needed to avoid sticking
            </li>
            <li>
              Once finished kneading, shape the dough into a ball then place in
              a large bowl, cover with damp cloth then let it rise for an hour on
              a warm location.
            </li>
            <li>
              Lightly deflate the dough, divide into rolls of 1-inch diameters,
              cut into 1.5-inch pieces then form into small buns, place on a
              baking pan lined with parchment paper.
            </li>
            <li>
              Set aside in a warm location and let it rise for 1 hour.
            </li>
            <li>
              Sprinkle bread crumbs on top then bake on a 200C pre heated oven
              for 12-15 minutes or until golden brown.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Sureliai;
