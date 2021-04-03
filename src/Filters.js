import React from 'react'
import Button from './Button'
import './Filters.css';

function Filters() {
    return (
        <div className="filters">
            <div className="filters__head">
                <h5>Filters</h5>
            </div>

            <div className="filters__launchyear filters__global">
                <p className="filters__text">Launch year</p>  
                <hr className="filters__launchyear--rule" />          
                <Button />
            </div>

             <div className="filters__success filters__global">
                 <p className="filters__text">Successful Launch</p>
                 <hr className="filters__launchyear--rule" />
                <Button />
            </div>

            <div className="filters__landing filters__global">
                <p className="filters__text">Successful Landing</p>
                <hr className="filters__launchyear--rule" />
                <Button />
            </div> 
        </div>
    )
}

export default Filters;