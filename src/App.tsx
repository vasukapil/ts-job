import React, { useState } from 'react';

import './App.css';
import HomePage from './components/HomePage/HomePage';

const App : React.FC = () => {

  const [del,setDelete] = useState(false)
  
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
