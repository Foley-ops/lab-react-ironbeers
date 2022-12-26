import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Newbeer = () => {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewer_tips, setBrewer_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState('');
    const [contributed_by, setContributed_by] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewer_tips: brewer_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    return (
        <div className='background'>
            <div className='row align-items-center'>
                <div className='col-12 mx-auto col-sm-6 d-grid gap-2'>
                    <Link to='/' className='d-grid gap-2 col-12 mx-auto'>
                        <button className="btn btn-primary mb-1" type="submit"><i className="fa fa-home"></i></button>
                    </Link>
                    <div className=' mx-auto col-sm-10 text-black fw-semibold'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="name" className="form-label mb-0 ">Name</label>
                                <input type="text" className="form-control rounded-5" id="name" value={name} onChange={e => setName(e.target.value )}></input>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="tagline" className="form-label mb-0">Tagline</label>
                                <input type="text" className="form-control rounded-5" id="tagline"  value={tagline} onChange={e => setTagline(e.target.value )}></input>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="description" className="form-label mb-0">Description</label>
                                <textarea className="form-control rounded-5" id="Description" rows="8" value={description} onChange={e => setDescription(e.target.value )}></textarea>
                            </div>
                            <div className="mb-1 ">
                                <label htmlFor="first_brewed" className="form-label mb-0">First Brewed</label>
                                <input type="text" className="form-control rounded-5" id="first_brewed" onChange={e => setFirst_brewed(e.target.value) } value={first_brewed}></input>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="brewer_tips" className="form-label mb-0">Brewers Tips</label>
                                <input type="text" className="form-control rounded-5" id="brewers_tips" onChange={e => setBrewer_tips(e.target.value)} value={brewer_tips}></input>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="attenuation_level" className="form-label mb-0">Attenuation Level</label>
                                <input type="number" className="form-control rounded-5" id="attenuation_level" onChange={e => setAttenuation_level(e.target.value)} value={attenuation_level}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contributed_by" className="form-label mb-0" >Contributed By</label>
                                <input type="text" className="form-control rounded-5" id="contributed_by" onChange={e => setContributed_by(e.target.value)} value={contributed_by}></input>
                            </div>
                            <button type="submit " className="btn btn-primary d-grid gap-2 col-12 mx-auto m-3 rounded-5">ADD NEW</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newbeer;
