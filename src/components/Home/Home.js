import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data/Data.json';
import TransportCard from '../TransportCard/TransportCard';
import './Home.css';

const Home = () => {
    return (
        <div  className='transport-card container'>
            
            {
                Data.map(data => <Link to={'/destination/'+data.id} style={{textDecoration: 'none'}}><TransportCard data={data} key={data.id}></TransportCard></Link>)
            }
        </div>
    );
};

export default Home;