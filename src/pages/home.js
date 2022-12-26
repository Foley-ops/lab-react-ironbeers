import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import beer from '../assets/beers.png';
import random_beer from '../assets/random-beer.png';
import new_beer from '../assets/new-beer.png';

function Home() {

  return (
    <div className='background'>
    <div className='row align-items-center' >
      <div className='col-12 mx-auto col-sm-6'>
        <Link to="/Beer" >
          <div className="card mb-1">
            <img src={beer} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h1>All beers</h1>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </Link>
        <Link to="/RandomBeer">
          <div className="card mb-1" >

            <img src={random_beer} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h1>Random Beer</h1>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </Link>
        <Link to="/NewBeer">
          <div className="card mb-1" >

            <img src={new_beer} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h1>New Beer</h1>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </div>
  );

}

export default Home;