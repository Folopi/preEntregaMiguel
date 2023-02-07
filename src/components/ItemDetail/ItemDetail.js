import './ItemDetail.css'

import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}
//creamos el contador de la cantidad de productos q queremos agregar al carrito teniendo en cuenta el stock disponible de dos formas diferentes q podemso intercalar InputCount y ButtonCount
const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
            }
        const reset = () => {
            if(count > 1) {
                setCount(0)
            }     
        }

    
    return (
        
             <div className='Counter'>          
             <div className='Controls'>
                <button className='Button btn btn-danger' onClick={decrement}>-</button>
                    <p className='Number'>{count}</p>
                 <button className='Button btn btn-success' onClick={increment}>+</button>
                 <button className="Button btn btn-warning" onClick={reset}>reset</button>
            </div>
             <div>
                 <button className='Button btn btn-success' onClick={() => onConfirm(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {//recibimos los datos del producto determinado
    const [inputType, setInputType] = useState('inputs')
    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount;/*si el valor de InputType es "input" mostrara un contador y si no es "input" mostrara otor tipo de contador */

    const { addItem, isInCart } = useContext(CartContext) //traemos la logica de context para verevicar luego si se encuentra ya el producto en el carrito o no

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))   
        
        addItem({ id, name, price, quantity, img, stock})
    }
// const [quantity,setQuantity]=useState(0)

//     const handleOnAdd = (quantity) => {
//         console.log(`agregue al carrito ${quantity} ${name}`)
//         setQuantity(parseInt(quantity))
    // }

    return (
        <article className="CardItemDetail">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg-detail"/>
            </picture>
            <section>
                <p className="Info-detail">
                    Categoria: {category}
                </p>
                <p className="Info-detail">
                    Descripción: {description}
                </p>
                <p className="Info-detail">
                    Precio: {price}
                </p>
                <p className="Info-detail">
                    Stock: {stock}
                </p>
            </section>           
            <footer className='ItemFooter'>
            {
                    isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>//verifica si en el carrito ya hay un producto agregado de la misma publicacion si es verdadero le amnda directo a el carrito y si es falso le da la opcionde comprar
                    ) : (
                        <ItemCount stock={stock} onConfirm={handleOnAdd} />
                    )
                }
                {/* {quantity>0?<Link to="/cart">ir al carrito</Link>:<ItemCount onAdd={handleOnAdd} stock={stock} />}
                 */}
            </footer>
        </article>
    )
}

export default ItemDetail