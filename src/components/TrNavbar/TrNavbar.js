import React from 'react';
import { Link } from 'react-router-dom';
import './TrNavbar.css';

const TrNavbar = ( props ) => {
    const {name, email} = props.logUser;
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div>
                       <Link to='/home'><img className='w-50' src="https://i.ibb.co/ZzhP2SK/logo.png" alt=""/></Link> 
                    
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse nav-style" id="navbarNav">
                        <ul className="navbar-nav nav-options">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/home' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/destination/1">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            {
                                email ? <li className='nav-item'>
                                    <h6 className='nav-link active user-style'> {props.logUser.name}</h6>
                                    </li> :
                                <li>
                                <Link to='/login_account'><button className='btn btn-primary'>Login</button></Link>
                            </li>

                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TrNavbar;