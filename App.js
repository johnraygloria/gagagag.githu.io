import { Routes, Route } from 'react-router-dom';

import Landing from './landingpage';
import Type from './assets/typepage';

import React from 'react';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={ <Landing/> } />
      <Route path="/Type" element={ <Type/>} />
    </Routes>
  );
}

export default App;