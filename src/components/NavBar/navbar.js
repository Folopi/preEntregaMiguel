import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget.js"
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const NavBar=({producto})=>{
    const navigate = useNavigate()

    return (
      <nav className="NavBar" >
            <h3 onClick={() => navigate('/')}>Pedalboards Argentinas</h3>
          <div className="Categories">
            <NavLink to={`/category/celular`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
            <NavLink to={`/category/tablet`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
            <NavLink to={`/category/notebook`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
          </div>
          <CartWidget />
      </nav>
    )
  }

export default NavBar
