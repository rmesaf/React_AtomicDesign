// DEPENDENCIES
import React from 'react';

// STYLES
const styles = require('./content.scss');

const Content = props => {
    return (
        <div className="content-container">
            <div className="content">{props.component}</div>
        </div>
    );
};

export default Content;