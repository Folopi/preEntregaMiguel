import './ItemDetailContainer.css'
import {  useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
{/*En ESTAS INSTANCIAS la persona ya a elejido ver detalle y la a mandado al /detail/ID */}
{/*Hacemos algo parecido que en ItemListContainer */}
const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
{/*nos fijamos en que Id estamos para identrificar el producto */}
    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(doc => {
            const dataProduct = doc.data()
            const productAdapted = { id: doc.id, ...dataProduct }
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        /*llamamos a la funcion y le pasamos de aprametro el ID para q nso pase el dato del producto en especifico*/
        // getProductById(productId).then(response => {
        //     setProduct(response);{/*luego de recibir lso datos los gaurdamso en el estado */}
        // }).finally(() => {
        //     setLoading(false)
        // })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product}/>{/*le pasamos los datos del producto */}
        </div>
    )
}

export default ItemDetailContainer