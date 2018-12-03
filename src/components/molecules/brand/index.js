// DEPENDENCIES
import React from 'react';

// ATOMS 
import Logo from '../../atoms/logo';

const Brand = () => {
    return (
        <a className="navbar-brand" href="#">
            <Logo />
            <p className="brand-logo-text">React SandBox</p>
        </a>      
    );
};

export default Brand;