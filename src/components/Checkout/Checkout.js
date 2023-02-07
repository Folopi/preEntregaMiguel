import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import CartForm from "../CartForm/CartForm"
import { useNavigate } from "react-router-dom"

import "./Checkout.css"
// console.log(names)

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [celu, setCelu] = useState("");
    const [names, setNames] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: names,
                    phone: celu,
                    email
                },
                items: cart,
                totalPrice
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
            console.log(ids)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsRef).then(productsAddedToCartFromFirestore => {
    
            // })
    
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
    
                const { id } = orderAdded
                setOrderId(id)

                clearCart();

                setTimeout(() => {
                    navigate('/')
                }, 5000)

                console.log(id)
            } else {
                console.error('hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
       
        
    }

    if(loading) {
        return <h1>Generando orden...</h1>
    }

    if(orderId) {
        return (
            <div>
                <h1>El Id de su compra es: {orderId}</h1>
                <p>se le reedirigira al catalogo.</p>
            </div>
        )
    }

    if(cart.length === 0) {
        return (
            <h1>No hay productos en el carrito</h1>
        )
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
       if (true) {
       return (<button onClick={createOrder}>Generar orden</button>)
        // event.preventDefault()
    }
       
        event.preventDefault()
    }

    // const  SubmitOrder=(createOrder)=>{
    //     return(<button onClick={createOrder}>Generar orden</button>)
    // }
    return (
        <div>
            <h1>formulario de compra</h1>
            <form onSubmit={handleOnSubmit} className="form-checkout">
           
            <input required placeholder="Ingrese su nombre y apellido:" minLength={3} className="names" value={names} onChange={(event) => setNames(event.target.value)}></input>
            <input type="number" required placeholder="Ingrese su numeor de telefono:" minLength={8} maxLength={12} value={celu} onChange={(event) => setCelu(event.target.value)}></input>
            <input type="email" required placeholder="Ingrese su email:" value={email} onChange={(event) => setEmail(event.target.value)}></input>
            <input type="email" required placeholder="Reingrese su email:" value={email2} onChange={(event) => setEmail2(event.target.value)}></input>
            
            {names !== "" && names.length> 2 && email !== "" && email === email2  && celu !== "" && celu.length>7&& celu.length<13?(
								<button type="submit" className="btn btn-success" onClick={createOrder}>Generar Orden</button>
						
					) : (
						<button type="submit" className="btn btn-success">Generar Orden</button>
					)}
        </form>
       
            {/* <button onClick={createOrder}>Generar orden</button> */}
        </div>
    )
}
export default Checkout;