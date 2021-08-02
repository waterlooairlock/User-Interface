import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from '../assets/banner-logo-white.png';
import homeicon from '../assets/home-icon.png';
import settingsicon from '../assets/settings-icon.png';
import logsicon from '../assets/logs-icon.png';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
function Navbar(location) {

    function getPos() {
        const location = useLocation().pathname;
        if (location == "/")
            return 'translateY(0)';
        else if (location == "/logs")
            return 'translateY(6.1vh)';
    }

    const sendEvent = (eventType) => {
        fetch(`localhost:8080/airlockevent/${eventType}`, {
            method:"post",
            body:data
        }).then(res => res.json())

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
            <Link to="/logs"><div className="nav-content">
                <div className="nav-tab">
                    <img class="nav-icon" src={logsicon}></img>
                    <h3 class="nav-text">Logs</h3>
                </div>
            </div></Link>
            
            <div className="v-spacer" style={{height: '43vh'}}></div>

            <ButtonGroup style={{"justifyContent": "center"}} className="nav-content" disableElevation variant="contained" color="primary">
                <Button onClick={() => sendEvent('enter')} variant="contained" color="green" style={{width:'130px'}} size="large" startIcon={<ArrowBackIcon />}>Enter</Button> 
            </ButtonGroup>

            <ButtonGroup style={{"justifyContent": "center"}} className="nav-content" disableElevation variant="contained" color="primary">
                <Button onClick={() => sendEvent('exit')} variant="contained" color="secondary" style={{width:'130px'}} size="large" startIcon={<ArrowForwardIcon />}>Exit</Button> 
            </ButtonGroup>
        </div>
    );
}

export default Navbar;