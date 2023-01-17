import './ItemCount.css'
import { useState } from 'react';


const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(prev => prev + 1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(prev => prev - 1)
        }     
    }
 
    return(
        <div className='Counter'>          
             <div className='Controls'>
                
                 <button className="Button btn btn-danger" onClick={decrement}>-</button>
                 <h4 className='Number'>{quantity}</h4>
                 <button className="Button btn btn-success" onClick={increment}>+</button>
             </div>
             <div>
                 <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
             </div>
        </div>
    )
 
 }
// const ItemCount= () =>{
// const [count, setCount]=useState(0)
//     const restar=()=>{
         
//         if (count == 0){
//             setCount(count);
//         } else if(count>0){
//             setCount(count -1);
//         }
//     }
//     const sumar=()=>{
//         setCount(count +1);
//     }
//     const reset=()=>{
//         setCount(0);
//     }
//     return(
//     <>
//         <p>contador</p>
//         <h1>{count}</h1>
//         <button className='btn btn-danger' onClick={restar}>-</button>
//         <button className='btn btn-info' onClick={reset}>reset</button>
//         <button className='btn btn-success' onClick={sumar}>+</button>
//     </>
// )
// }
export default ItemCount;