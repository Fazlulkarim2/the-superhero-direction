import React from 'react';

const Cart = (props) => {
    const {cart} =props;
    let total =0;
    for(const doctor of cart){
       const doctorSalary = doctor.salary;
       const salaryParse = parseFloat(doctorSalary)
        total = total + salaryParse;
        total.toFixed(2);
      
    }
    return (
        <div>
            <h2>total doctors:{props.cart.length}</h2>
            <br/>
            <p>Total:${total}</p>
                    </div>
    );
};

export default Cart;