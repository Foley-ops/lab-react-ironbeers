import '../styles.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BeerId() {

    const { id } = useParams();
    const [beer, setBeer] = useState({});

    useEffect(() => {
        if (id) {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then(response => {
                setBeer(response.data);
                console.log(response.data)
            });
        } else {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(response => {
                setBeer(response.data);
            });
        }
    }, [id]);

    return (
        <div>
            <div className='background'>
                <div className='row align-items-center'>
                    <div className='col-12 mx-auto col-sm-6 d-grid gap-2'>
                        <Link to='/Beer' className='d-grid gap-2 col-12 mx-auto'>
                            <button className="btn btn-primary mb-1" type="submit"><i className="fa fa-home"></i></button>
                        </Link>

                        <div className="card mb-1 gap-2 col-12 mx-auto align-items-center pt-3"  >
                            <img src={beer.image_url} className="card-img-top" alt="..." style={{ width: '130px', height: '220px', objectFit: 'contain' }}></img>
                            <div className="card-body">

                                <div className="d-flex justify-content-between">
                                    <h1 className="card-title fw-normal">{beer.name}</h1>
                                    <p className="card-subtitle text-end fw-bold fs-1 opacity-25">{beer.attenuation_level}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="card-title fw-semibold fs-6">{beer.tagline}</p>
                                    <p className="card-subtitle text-end text-black fw-bold">{beer.first_brewed}</p>
                                </div>

                                <p className="card-subtitle text-black fw-semibold pb-3">{beer.description}</p>
                                <p className="fw-bold">{beer.contributed_by}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BeerId;
