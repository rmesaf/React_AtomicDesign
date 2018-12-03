// DEPENDENCIES
import React from 'react';

// STYLES
import styles from '../../../styles/main.scss'


class Welcome extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="jumbotron">
                    <h1>¡¡¡HELLO WORLD!!!</h1>
                </div>
            </div>
        );
    }
}

export default Welcome;