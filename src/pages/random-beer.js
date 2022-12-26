import React from 'react';
import { Link } from 'react-router-dom';

function Randombeer() {
    return (
        <div className='background'>
            <div className='row align-items-center'>
                <div className='col-12 mx-auto col-sm-6 d-grid gap-2'>
                    <Link to='/' className='d-grid gap-2 col-12 mx-auto'>
                        <button className="btn btn-primary mb-1" type="submit"><i className="fa fa-home"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Randombeer;

