import { useState, createContext } from "react";

export const CartContext = createContext()//creamos un context y lo exportamos a App
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    // const btnBorrar=(id)=>{
    //   const fi =cart.filter((el)=>el.id==id);
      // fi.splice(0,5)
      // cart.splice(id,1)
      // setCart( cart.splice(id,1))
      // setCart(fi);
      // console.log(fi)
      // }

      const removeItem = (itemId) => {
        
        setCart(cart.filter(post => post.id !== itemId));
    }

    const clearCart = () => {
        
      setCart([]);
  }
//       const vaciarCarrito=()=>{
//         setCart([]);
//     }

// const vaciar=vaciarCarrito();


// const subTotal=()=>{
//   cart.forEach(prod => {
//     return prod.price * prod.quantity;
//   })
// }
// const subTotall=subTotal();




    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart(prev => {
            // console.log(prev)
            return [...prev, productToAdd]
          })
        } else {
          console.error('YA ESTA AGREGADO')
        }
    }

    const isInCart = (id) => cart.some(prod => id === prod.id)//si es verdadero significa q ya se encuentra el producto en el carrito

    const getTotalQuantity = () => {//esta funcion sirve para contar cuantos productos en total se agregaron y mostrar en el cartwidget
      let accu = 0

      cart.forEach(prod => {
        accu += prod.quantity
      })

      return accu
    }

    const totalQuantity = getTotalQuantity()


    const total = () => {
      let accu = 0

      cart.forEach(prod => {
        accu += prod.price *prod.quantity
      })

      return accu
    }
  const totalPrice=total();




    return (//En app.js CartProvider envuelve a todos los componentes.
        <CartContext.Provider value={{addItem, isInCart, totalQuantity, cart,totalPrice,removeItem,clearCart}}>
            { children }
        </CartContext.Provider>//children vendria siendo todos los componentes que estan envueltos por CartProvider y les damos acceso a el valor del contexto
        
        
        
    )
}