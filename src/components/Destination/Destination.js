import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import Data from '../Data/Data.json';
import Map from '../Map/Map';

const Destination = () => {
    const { id } = useParams();
    const [from, setFrom] = useState();
    const [destination, setDestination] = useState();
    const [transport, setTransport] = useState();

    const [state, setState] = useState(false);
    const handleSearch = () => {
        setState(true);
        Data.map(data => {
            const id1 = parseInt(data.id);
            const id2 = parseInt(id);
            if (id1 === id2) {
                setTransport(data);
            }
        });
    }

    const handleFromBlur = (event) => {
        const destination = event.target.value;
        setFrom(destination);
    }
    const handleToBlur = (event) => {
        const destination = event.target.value;
        setDestination(destination);
    }

    return (
        <div className="container">
            <div className="row destination-container">
                <div class="col-4">
                    {
                        state ?
                            <div className='destination'>
                                <div className='from-to-container'>
                                    <li>{from}</li>
                                    <li>{destination}</li>
                                </div>
                                {/* transpot options */}
                                <div className="row mt-4 m-1 option-section">
                                    <div className="col-3">
                                        <img className='transport-photo' src={transport.photo} alt=""/>
                                    </div>
                                    <div className="col-3">
                                        <h5>{transport.name}</h5>
                                    </div>
                                    <div className="col-2">
                                        <img className='w-100' src="https://i.ibb.co/Pw1Hh9z/peopleicon.png" alt=""/>
                                    </div>
                                    <div className="col-2"><h5>1</h5></div>
                                    <div className="col-2"><h5>$45</h5></div>
                                </div>
                                <div className="row mt-4 m-1 option-section">
                                    <div className="col-3">
                                        <img className='transport-photo' src={transport.photo} alt=""/>
                                    </div>
                                    <div className="col-3">
                                        <h5>{transport.name}</h5>
                                    </div>
                                    <div className="col-2">
                                        <img className='w-100' src="https://i.ibb.co/Pw1Hh9z/peopleicon.png" alt=""/>
                                    </div>
                                    <div className="col-2"><h5>2</h5></div>
                                    <div className="col-2"><h5>$75</h5></div>
                                </div>
                                <div className="row mt-4 m-1 option-section">
                                    <div className="col-3">
                                        <img className='transport-photo' src={transport.photo} alt=""/>
                                    </div>
                                    <div className="col-3">
                                        <h5>{transport.name}</h5>
                                    </div>
                                    <div className="col-2">
                                        <img className='w-100' src="https://i.ibb.co/Pw1Hh9z/peopleicon.png" alt=""/>
                                    </div>
                                    <div className="col-2"><h5>2</h5></div>
                                    <div className="col-2"><h5>$97</h5></div>
                                </div>
                            </div>
                            // form section
                            : <div className='destination'>
                                <form>
                                <lebel>Pick from</lebel> <br />
                                <input className="form-control" onBlur={handleFromBlur} type="text" required/> <br />
                                <lebel>Pick to</lebel> <br />
                                <input className="form-control" onBlur={handleToBlur} type="text" required/> <br />
                                <label for="departure">Departure</label> <br/>
                                <input className="form-control" type="date" id="departure" name="departure" required/> <br/>
                                <button onClick={handleSearch} className='btn btn-success w-100'>Search</button>
                                </form>
                            </div>
                    }
                </div>
                <div className="col-8">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Destination;