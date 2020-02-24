import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Beers extends Component {

    // this function returns an array formatted with HTML
    showAllBeers = () => {
        // map function created to loop through the array of allBeers and create a new array with html <divs>
        let allBeers = this.props.allBeers.map((eachBeer, index) => {
            console.log(eachBeer.image_url)
            // Warning: Each child in a list should have a unique "key" prop. thats why we put / key={index} / after <div
            return(<div key={index}>    
            {/* we show the name of each beer */}
            <Link to = {`/allBeers/${eachBeer.id}`}>{eachBeer.id}<h1>{eachBeer.name}</h1></Link>
            {/* we show the images through <img scr =.......> */}
            <img src = {eachBeer.image_url}/>
            {/* show tagline */}
            <p>{eachBeer.tagline}</p>
            {/* show contributed by */}
            <p>{eachBeer.contributed_by}</p>
            </div>)
        })
        return allBeers
    }



    render() {
        console.log(this.props)
        return (
            <div>
            {/* this.props is a syntax that access the props, to access the props need to tap this.props.prop_name */}
                {this.showAllBeers()}
            </div>
        );
    }
}

export default Beers;