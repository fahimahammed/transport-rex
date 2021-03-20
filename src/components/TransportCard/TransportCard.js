import React from 'react';
import './TransportCard.css';

const TransportCard = (props) => {
    const {name, photo} = props.data;
    return (
        <div className='transport-container'>
            <img src={photo} alt=""/> 
            <br/> <br/>
            <h5>{name}</h5>
        </div>
    );
};

export default TransportCard;