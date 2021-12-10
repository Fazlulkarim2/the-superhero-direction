
import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee ,faDollarSign} from '@fortawesome/free-solid-svg-icons'

import './Doctor.css';
const Doctor = (props) => {
    console.log(props.doctor);
    const {name,age,picture,email,gender,salary} =props.doctor;
    const element = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div className="doctors">
        <div className="doctor">
            <img src ={picture} alt =""/>
            <h2>Name:{name}</h2>
            <p>Gneder:{gender}</p>
        <p>Age:{age}</p>
        <p>Email:{email}</p>
        <p>Salary:{salary}</p>
        <button onClick ={()=>props.handleAddToCart(props.doctor)} className='regular-button'>{element}Add to cart</button>

        </div>
        </div>
        
    );
};

export default Doctor;