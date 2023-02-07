import { useContext, useEffect } from "react";
import { CartContext } from '../../Context/CartContext';
import { Link,useNavigate  } from 'react-router-dom'

import './Cart.css'
// import Cart.css
// import Item from "../Item/Item";
const Cart=()=>{

const {addItem, isInCart, totalQuantity, cart, totalPrice,removeItem,clearCart}=useContext(CartContext);



const navigate = useNavigate()
const ItemCart = ({id, name, img, price, quantity,stock}) => {
    {/*desectruturamos el array de productos recibido por parametros */}
    
        return (
            <div >
            <article className="article-carrito">
                <header className="Header-carrito">
                    <h2 className="ItemHeader-cart">
                        {name}
                    </h2>
                </header>
                <section className="section-cart">
                <picture>
                    <img src={img} alt={name} className="ItemImg-carrito" />
                </picture>
                    <p className="Info-cart" > -cantidad: {quantity} </p>
                    <p className="Info-cart" > -disponibles: {stock-quantity} </p>
                    <p className="Info-cart" > -Precio: ${price} </p>
                    <p className="Info-cart" > -Subtotal: ${price*quantity} </p>
                    {/* <p className="Info-cart" > -subtotal: ${subTotall} </p> */}
                    <button className="borrar-item btn btn-danger" onClick={() => removeItem(id)}>Borrar</button>
                </section>           
                
                </article>
                
                </div>
            
        )
    }
    // useEffect(() => {
          
    //     cart.length >0&& <Link to='/detail'>¡oh!, no hay productos en el carrito, vuelve a el catalogo</Link>
    //     }, [cart])
    // onClick={() => removeItem(product.product.id)}
    {/* <footer className='ItemFooter'> */}
                    {/* <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link> */}
                {/* </footer> */}
        if (cart.length<1) {
         return (<Link to={`/`} className="ono">¡oh!, no hay productos en el carrito, vuelve a el catalogo</Link>);
    }
    return(
    
    <div className="cart-div">
        {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
        <p >Precio total: <span className="pricetotal">{totalPrice}</span> </p>
        <p>Cantidad de productos:{totalQuantity}</p>
        <button className="btn btn-danger" onClick={() => clearCart()}>Borrar todo el carrito</button>
        <button className="btn btn-success"onClick={() => navigate('/checkout')}>comprar</button>
        {/* <Link to='/detail'>¡oh!, no hay productos en el carrito, vuelve a el catalogo</Link> */}
        {/* <button className="btn btn-danger" onClick={vaciar}>borrar</button> */}
    </div>)
        
}
//  <Item key={prod.id}  {...prod} />
// // const Item = ({id, name, img, price}) => {
    
// //         return (
// //             <article className="CardItem">
// //                 <header className="Header">
// //                     <h2 className="ItemHeader">
// //                         {name}
// //                     </h2>
// //                 </header>
// //                 <picture>
// //                     <img src={img} alt={name} className="ItemImg" />
// //                 </picture>
// //                 <section>
// //                     <p className="Info" >
// //                         Precio: ${price}
// //                     </p>
// //                 </section>           
// //                 <footer className='ItemFooter'>
// //                     <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
// //                 </footer>
// //             </article>
// //         )
//     }
export default Cart;