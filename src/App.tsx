import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Form_ref from './components/Form_Week5/Form_ref';
import HomePage from './components/HomePage/HomePage';
import Shopping from './components/Products/Shopping';


const App : React.FC = () => {
  
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="shop" element={ <Shopping/> } />
        <Route path="admin" element={ <Form_ref/> } />
        <Route path="Cart" element={ <p>Shopping Cart</p> } />
      </Routes>
    </div>
  );
}

export default App;
