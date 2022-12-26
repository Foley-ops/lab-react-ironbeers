import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BeerList() {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const beer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/');
                console.log(beer);
                setData(beer.data);
            }
            catch (error) {

            }
        }
        fetchData();
    }, []);

    
    return (
        <div>
            {data && (
                <div>
                    {data.map(item => (
                        <div key={item.id}>
                            <div className="card mb-1" >
                                <Link to={`/Beer/${item._id}`} className="row g-0">
                                    <div className="col-md-3">
                                        <img src={item.image_url} className="img-fluid rounded-start" alt="..." style={{ width: '130px', height: '220px', objectFit: 'contain' }}></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title">{item.name}</h2>
                                            <h4 className="card-text">{item.tagline}</h4>
                                            <p className="card-text"><small className="text-muted">Created By: {item.name}</small></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    ))}

                </div>
            )}
        </div>
    )
}

export default BeerList;