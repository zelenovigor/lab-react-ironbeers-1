import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import all components
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';

// import Switch, Link, Route
import {Switch, Link, Route} from 'react-router-dom'

// import axios
import axios from 'axios'; 


// class App extends Component syntax to create a class component

class App extends Component {

  // create an object called 'state' with an empty array 'beers'

  state = {     
    beers: [],
    igor: ''
  }

  // componentDidMount is a prebuild function that runs before app renders
  // called once in the component life cycle and it signals that the component and all its sub-components have rendered properly. 

  componentDidMount(){
    // console.log('didMount')
    //axios sends a request to the API server and server responds and information saved in res.data 
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(res=>{
      console.log(res);
      // this.setState changes/adds the value of the object 'state', 
      this.setState({
        // beers is initially equal to empty [], but now beers = res.data array with objects from API server
        beers: res.data
      })
    }
    ) 
  }

  // render transforms react components into DOM (Document Object Model) nodes that browser can understand and display on the screen.
  render() {
    // console.log('render')
    return (
      <div className="App">                       

{/* Link component is changing current URL on the web page */}
{/* create a links (Link from starts capital letter to= '/name') */}
      <Link to='/hi'>Home</Link>
      <Link to='/Beers'>Beers</Link>
      <Link to='/RandomBeer'>RandomBeer</Link>
      <Link to ='/NewBeer'>NewBeer</Link> 

{/* Switch component is looking for that URL that matches the path and then renders it */}
{/* allBeers is a prop, everything inside of the component call (inside of chabbas) is a prop and after equal sign is a value of prop */}


      <Switch>
        <Route exact path='/hi' render={props => <Home/>}/>
        <Route exact path ='/Beers' render={props => <Beers allBeers = {this.state.beers} igor='fasdfg' juan='777'/>}/>
        {/* props is were you are passing the component. props are used to pass information, data or functions to components. allBeers, igor, stefan are props  */}
        <Route exact path ='/RandomBeer' render={props => <RandomBeer/>}/>
        <Route exact path ='/NewBeer' render={props => <NewBeer/>}/>

      </Switch>

      
          



      </div>
    );
  }
}

export default App;



/*
axios({
  headers: { 'X-Auth-Token': '7d113a48b37546d993c004d5c342f194' },
  url: 'http://api.football-data.org/v2/matches?status='LIVE',
  dataType: 'json',
  type: 'GET',
}).then(function(response) {
  // do something with the response, e.g. isolate the id of a linked resource   
  console.log(response);
});

*/