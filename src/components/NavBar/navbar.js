import { useContext } from 'react'
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget.js"
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const NavBar=()=>{
    const navigate = useNavigate()
    {/*BUSCAR */}
const { totalQuantity } = useContext(CartContext)
{/*importa de el contexto la cantidad de productos en total q hay */}
    return (
      <nav className="NavBar" >
            <h3 onClick={() => navigate('/')} className="marca">Pedalboards Argentinas</h3>
          <div className="Categories">
            <NavLink to={`/category/bolsos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Bolsos</NavLink>{/*Es un link pero con estilos si es q esta activo */}
            <NavLink to={`/category/pedalboards`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pedalboards</NavLink>
            <NavLink to={`/category/correas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Correas</NavLink>
          </div>
          <CartWidget totalQuantity={totalQuantity}/>{/*Le pasamos a el carrito la cantidad de productos q se han agregado */}
      </nav>
    )
  }

export default NavBar;
