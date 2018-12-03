// DEPENDENCIES
import React from 'react';

// TEMPLATES
import Default from '../../templates/default';
// MOLECULES
import Welcome from '../../molecules/welcome';

class Home extends React.Component {
    render(){
        return (
            <Default content={<Welcome />}/>
        );
    }
}

export default Home;