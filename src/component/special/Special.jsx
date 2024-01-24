
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';


const Special = ({ring}) => {
   const reng = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <small><p>{reng}</p></small>
        </div>
    );
};

export default Special;