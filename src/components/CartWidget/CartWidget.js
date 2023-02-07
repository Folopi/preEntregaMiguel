import "./CartWidget.css"
import { useNavigate } from 'react-router-dom'
const CartWidget=({ totalQuantity })=>{{/*recibimos por props/parametros la cantidad de productos en total q se agreggo al carrito */}
const navigate = useNavigate()
return(
    <div className="contain-cartWidget btn btn-primary" onClick={() => navigate('/cart')}>
        {totalQuantity}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelqvsTQhihl2gW5GnBNgneo4fVYj4eXoVeY72xlCgD3CgMyrXDxm9Dfn6xlFYRL5WaMA&usqp=CAU" className="img-carrito"/>
    </div>
)
}

export default CartWidget
 