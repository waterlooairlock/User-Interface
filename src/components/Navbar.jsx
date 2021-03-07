import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from '../assets/banner-logo-white.png';
import homeicon from '../assets/home-icon.png';
import settingsicon from '../assets/settings-icon.png';
import logsicon from '../assets/logs-icon.png';

function Navbar(location) {

    function getPos() {
        const location = useLocation().pathname;
        if (location == "/")
            return 'translateY(0)';
        else if (location == "/functions")
            return 'translateY(6.1vh)';
        else if (location == "/logs")
            return 'translateY(12.5vh)';
    }

    return (
        <div id="navbar-bkg">
            <img src={logo} className="nav-content" />
            <div className="divider nav-content"></div>
            <div id="pos-indicator" style={{transform: getPos(), transition: '1s ease-in-out'}}></div>
            
            <div className="v-spacer" style={{height: '10vh'}}></div>
            <Link to="/"><div className="nav-content">
                <div className="nav-tab">
                    <img class="nav-icon" src={homeicon}></img>
                    <h3 class="nav-text">Dashboard</h3>
                </div>
            </div></Link>
            
            <div className="v-spacer" style={{height: '5vh'}}></div>
            <Link to="/functions"><div className="nav-content">
                <div className="nav-tab">
                    <img class="nav-icon" src={settingsicon}></img>
                    <h3 class="nav-text">Functions</h3>
                </div>
            </div></Link>
            
            <div className="v-spacer" style={{height: '5vh'}}></div>
            <Link to="/logs"><div className="nav-content">
                <div className="nav-tab">
                    <img class="nav-icon" src={logsicon}></img>
                    <h3 class="nav-text">Logs</h3>
                </div>
            </div></Link>
            
            <div className="v-spacer" style={{height: '43vh'}}></div>
            <h3 className="nav-indicator nav-content">Secured</h3>
            <h3 className="nav-indicator nav-content" style={{width: '90%'}}>Pressurized</h3>
        </div>
    );
}

export default Navbar;