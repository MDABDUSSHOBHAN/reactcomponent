import React from 'react';
import '../TShart/shart.css'

const Shart = ({tsharts,handelCart}) => {
    console.log(tsharts);
   const {name,picture,price,_id,gender,index} = tsharts;
   console.log(name);
   
   

    return (
        <div >
            <div className='t_shart'>
               <img src= {picture} alt="" />
               <h4>{name}</h4>
               <p>Price:${price}</p>
               <button onClick={()=>handelCart(tsharts)} >Buy Now</button>
            </div>
           
        
        </div>
    );
};

export default Shart;