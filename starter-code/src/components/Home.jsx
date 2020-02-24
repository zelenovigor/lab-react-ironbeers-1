import React, { Component } from 'react';


//extends React.Component statement creates an inheritance to React.Component,
//and gives a component access to React.Component's functions.
//render() method returns HTML.

class Home extends Component {
    render() {
        return (
            <div>
                I'm home
            </div>
        );
    }
}

export default Home;