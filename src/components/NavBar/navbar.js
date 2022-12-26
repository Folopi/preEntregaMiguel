import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget.js"

const NavBar=({producto})=>{
return(
    <nav>
       
        <h1 className="title-menu">Pedalboards Argentinas</h1>
        <button className="boton btn btn-outline-success"> {producto}</button>
        <button className="boton btn btn-outline-success">Palillo de bateria</button>
        <button className="boton btn btn-outline-success">Bolso</button>
        <button className="boton btn btn-outline-success">Pedalera</button>
        <button className="boton btn btn-outline-success">Microfono</button> 
         <CartWidget/>
        
    </nav>
)
}

export default NavBar
