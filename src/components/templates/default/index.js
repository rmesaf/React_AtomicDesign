// DEPENDENCIES
import React from 'react';
// ORGANISMS
import Header from '../../organisms/header';
import Content from '../../organisms/Content';
// STYLES
const style = require('../../../styles/main.scss')
const styles = require('./style.scss');

const Default = props => {
    return (
        <div>
            <Header />
            <Content component={ props.content } />
        </div>
    );
};

export default Default;