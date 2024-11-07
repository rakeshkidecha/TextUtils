import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${props.mode==="light"?"bg-body-tertiary":"bg-dark"}`}>
                <div className="container">
                    <a className={`navbar-brand ${props.mode==="light"?"text-black":"text-white"}`} href="/">{props.logoTitle}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active ${props.mode==="light"?"text-black":"text-white"}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${props.mode==="light"?"text-black":"text-white"}`} to="/About">{props.about}</Link>
                        </li>
                        </ul>
                    </div>
                    <div className='theme-indicator p-2 mx-2 rounded-circle bg-danger' onClick={props.redTheme}></div>
                     <div className='theme-indicator p-2 mx-2 rounded-circle bg-success'></div>
                    <div className='theme-indicator p-2 mx-2 rounded-circle' id='purple'></div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label ${props.mode==="light"?"text-black":"text-white"}`} htmlFor="flexSwitchCheckDefault">{props.mode==="light"?"Enable dark Mode":"Enable light Mode"}</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    logoTitle : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    logoTitle : "logo title here",
    about : "About"
}