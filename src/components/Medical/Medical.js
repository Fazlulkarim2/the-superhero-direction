import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './Medical.css';


const Medical = (props) => {
    const [doctors,setDoctors] = useState([]);
    const [cart,setCart] =useState([]);
    useEffect(()=>{
        fetch('./medical.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[])
    const handleAddToCart = (doctor) =>{
        const newCart = [...cart, doctor];
        setCart(newCart);

    }
    return (
        <>
        <div className='medical-container'>
        <div className='doctor-container'>
           
        {
            doctors.map(doctor=><Doctor 
                key ={doctor.key}
                doctor ={doctor} handleAddToCart ={handleAddToCart}></Doctor>)
        }
        </div>
        <div className='cart-container'>
            <Cart cart ={cart}></Cart>
        </div>
       
        </div>
        </>
    );
};

export default Medical;