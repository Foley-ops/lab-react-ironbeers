import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/styles.css';
import Home from './pages/home.js';
import Beer  from './pages/beer.js';
import Newbeer from './pages/new-beer.js';
import BeerId from './pages/beer-id.js';

function App() {

  return (
    <Router>
      <header ><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link></header>
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Beer" element={<Beer />} />
        <Route path="/RandomBeer" element={<BeerId />} />
        <Route path="/NewBeer" element={<Newbeer />} />
        <Route path="/Beer/:id" element={<BeerId/> } />
        

      </Routes>

 
 
    </Router>

  );
}

export default App;
