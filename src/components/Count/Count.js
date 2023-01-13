import { useState } from 'react';
const ItemCount= () =>{
const [count, setCount]=useState(0)
    const restar=()=>{
        
        if (count == 0){
            setCount(count);
        } else if(count>0){
            setCount(count -1);
        }
    }
    const sumar=()=>{
        setCount(count +1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
    <>
        <p>contador</p>
        <h1>{count}</h1>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <button className='btn btn-info' onClick={reset}>reset</button>
        <button className='btn btn-success' onClick={sumar}>+</button>
        
    </>
)
}
export default ItemCount;