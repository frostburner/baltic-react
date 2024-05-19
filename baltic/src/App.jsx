import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EstoniaPage from './pages/EstoniaPage';
import LatviaPage from './pages/LatviaPage';
import LithuaniaPage from './pages/Lithuania';
import KamaRecipe from './pages/Estonia/Kama';
import PikuradRecipe from './pages/Estonia/Pirukad';
import KirjuRecipe from './pages/Estonia/Kirju';
import VastlakukkelRecipe from './pages/Estonia/Vastla';
import Riekstini from './pages/Latvia/recipe1';
import Sokolades from './pages/Latvia/recipe2';
import Medus from './pages/Latvia/recipe3';
import Rupjmaize from './pages/Latvia/recipe4';
import Kurs from './pages/Lithuania/Lt-recipe1';
import Sureliai from './pages/Lithuania/Lt-recipe2';
import Var from './pages/Lithuania/Lt-recipe3';
import Eduoliai from './pages/Lithuania/Lt-recipe4';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/estonia' element={<EstoniaPage/>} />
        <Route path='/latvia' element={<LatviaPage/>} />
        <Route path='/lithuania' element={<LithuaniaPage/>} />

        <Route path='/kama' element={<KamaRecipe/>} />
        <Route path='/pirukad' element={<PikuradRecipe />} />
        <Route path='/kirju' element={<KirjuRecipe />} />
        <Route path='vastla' element={<VastlakukkelRecipe />} />

        <Route path='/riekstini' element={<Riekstini/>} />
        <Route path='/sokolades' element={<Sokolades />} />
        <Route path='/medus' element={<Medus />} />
        <Route path='/rup' element={<Rupjmaize />} />

        <Route path='/kurs' element={<Kurs />} />
        <Route path='/sureliai' element={<Sureliai />} />
        <Route path='/var' element={<Var />} /> 
        <Route path='/edu' element={<Eduoliai />} />
      </Routes>
    </Router>
  );
}

export default App;
