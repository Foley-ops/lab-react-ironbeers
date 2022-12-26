import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BeerList from './listbeers';
import axios from 'axios';



function Beer() {

    const [query, setQuery] = useState('');
    const [beers, setBeers] = useState([]);

    function searchBeers(query) {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then(response => {
                setBeers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function handleChange(event) {
        setQuery(event.target.value);
        searchBeers(query);
    }

    return (
        <div className='background'>

            <div className='row align-items-center'>
                <div className='col-12 mx-auto col-sm-6'>
                    <Link to='/' className='d-grid gap-2 col-12 mx-auto'>
                        <button className="btn btn-primary mb-1" type="submit"><i className="fa fa-home"></i></button>
                    </Link>
                    <div className="form-floating mt-1">
                        <form>
                            <input id="BeerSearch" className="form-control" placeholder="Search Beer" value={query} onChange={handleChange} />
                        </form>
                    </div>
                    <div className="text-bg-light mb-3 ">
                        {beers.map(beer => (
                            <div className="row ">
                                <div key={beer.id} className="fw-semibold table-row">
                                    <Link to={`/Beer/${beer._id}`} className="row g-0 text-black">
                                        {beer.name}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <BeerList />
                </div>
            </div>
        </div>
    )
}

export default Beer;