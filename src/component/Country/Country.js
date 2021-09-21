import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;


    return (
        <div className="country bg-dark text-warning">
            <h4 className="text-warning">This is: {name}</h4>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital is: {capital}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;