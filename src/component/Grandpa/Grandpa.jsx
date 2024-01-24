import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncel from '../Uncel/Uncel';
import Aunty from '../Aunty/Aunty';
import '../Grandpa/grandap.css'


export const RingContext = createContext('Golden');
const Grandpa = () => {


  const ring = "Diamon";
  

    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <RingContext.Provider value = 'golden ring'>
                 <section className='flex'>
                  <Father ring={ring} ></Father>
                   <Uncel></Uncel>
                   <Aunty></Aunty>
                  </section>
            </RingContext.Provider>
            
        </div>
    );
};

export default Grandpa;