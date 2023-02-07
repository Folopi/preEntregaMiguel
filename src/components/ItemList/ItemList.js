// import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products }) => {{/*recibe todos los productos recibidos */}
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
            {/*ItemList se encarga de recibir los productos y q apartir de cada producto recibido poner un componente Item y pasarle el id y el array con productos */}
        </div>  )}
        export default ItemList;