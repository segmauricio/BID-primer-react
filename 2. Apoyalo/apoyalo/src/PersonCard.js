import React, { Component } from 'react';
import './PersonCard.css';
    
class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div className='cards'>
            <div className='card-body'>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
            </div>

        );
    }
}

export default PersonCard;
