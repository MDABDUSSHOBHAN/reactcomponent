import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shart from '../TShart/Shart';
import Cart from '../cart/Cart';
import '../order/order.css'
import toast from 'react-hot-toast';



const Order = () => {
   const tshart= useLoaderData();
   const [cart,setCart] = useState([]);
   console.log(tshart);
   //adding product to cart
   const handelCart= tshart=>{

    const exist = cart.find(ts=>ts._id== tshart._id )
    if(exist){
      toast('You have already add this product.', {
        style: {
          border: '1px solid black',
          background: 'red',
          padding: '16px',
          icon: '👏',
        },
     
      });

    }
    else
    {
      const newCart = [...cart, tshart ];
      setCart(newCart);
      console.log(tshart);

    }
      
   }
//adding product to cart

// Removeing Product From Cart
  const handelRemoveCart= id =>{
        const reamining = cart.filter(ts => ts._id!== id);
        setCart(reamining);
        console.log(id);
  }
  // Removeing Product From Cart



   
    return (
        <div className='home_container'>

   <div className='tshart_container'>
   {
        tshart.map(tsharts=> <Shart
        key={tsharts._id}
        tsharts={tsharts}
        handelCart={handelCart}
        
        ></Shart>)
     }
 
   </div>
   {/* Cart Container */}
  <div className='cart_container'>
    <Cart cart={cart}
    handelRemoveCart={handelRemoveCart}
    ></Cart>
  </div>
  
   
     

        </div>
    );
};

export default Order;