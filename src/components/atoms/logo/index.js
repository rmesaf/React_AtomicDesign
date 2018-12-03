// DEPENDENCIES
import React from 'react';

// ASSETS  
const Logo_src = require('../../../assets/images/logo.png');

const Logo = () => {
    return (
        <img className="brand-logo" src={Logo_src} ></img>   
    );
};

export default Logo;