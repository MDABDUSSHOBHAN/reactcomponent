import React from 'react';


const Cart = ({cart,handelRemoveCart}) => {
    console.log(cart);
    let message;
    if(cart.length===0){
        message = <p>Please Add Some Products</p>
    }
    else{
     message=   <div>
                <h3>BoroloXXX</h3>
                <p><small>Thank You!!</small></p>

        </div>
        
    }
    return (
        <div>
            <h3>Number of product:{cart.length}</h3>
            {message}
            {
                cart.map(tshart => <p>{tshart.name} 
                <button onClick={()=>handelRemoveCart(tshart._id)} >X</button> </p>)
            }
        </div>
    );
};

export default Cart;