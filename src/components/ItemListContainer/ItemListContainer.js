// import './ItemListContainer.css'

import { useState, useEffect } from 'react';
// import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
// import { getDocs, collection } from 'firebase/firestore'
import { getDocs, collection, query, where } from 'firebase/firestore';
// import { db } from '../../services/firebase/firebaseConfig';
import { db } from '../../services/firebase/firebaseConfig';
console.log(db)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        document.title = 'Todos los productos'
    }, [])

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })

            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId).then(response => {
        //     setProducts(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })          
    }, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='ItemListContainer'>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

// const ItemListContainer = ({ greeting }) => {
//     const [products, setProducts] = useState([]);{/*creamos el estado de productos con valor inicial de un array vacio */}
//     const [loading, setLoading] = useState(true);{/*si es verdadero mostrara el spinner de q esta cargando, si es falso mostrara la app */}

//     const { categoryId } = useParams();{/*nos fijamos la URL y la guardamos desectruturando y la guardamso en una variable */}


//     useEffect(() => {
//         document.title = 'Todos los productos'
//     }, [])

// useEffect(() => {
//     setLoading(true)
//     const collectionRef = categoryId 
//     ? query(collection(db, 'products'), where('category', '==', categoryId))
//     : collection(db, 'products')

// getDocs(collectionRef).then(response => {
//     const productsAdapted = response.docs.map(doc => {
//         const data = doc.data()
//         return { id: doc.id, ...data }
//     })

//     setProducts(productsAdapted)
// }).catch(error => {
//     console.log(error)
// }).finally(() => {
//     setLoading(false)
// })
// }, [categoryId])

//     useEffect(() => {
//         setLoading(true)
//         {/*creamos una variable con una condicional que si estamos parados en la seccion de categoryId le asignamos la importacion de getProductsByCategory de lo contrario getProducts*/}
//         const asyncFunction = categoryId ? getProductsByCategory : getProducts;

//         asyncFunction(categoryId).then(response => {
//             {/*llamamos a asyncFunction y le ponemos de parametros CategoryId(si es getProductsByCategory solo traera productos de la categoria elegida, si es getProducts todos los productos )*/}
//             setProducts(response)
//             {/*como nuevo valor de products ponemos los productos recibidos ya sean filtrados por categoria o no */}
//         }).catch(error => {
//             console.log(error)
//         }).finally(() => {
//             setLoading(false)
//         })          
//     }, [categoryId]);
    {/*BUSCAR dependencias de useEffect */}


//     if(loading) {
//         return <h1>Cargando productos...</h1>
//     }

//     return (
//         <div className='ItemListContainer'>
//             <h1>{greeting}</h1>
//             <ItemList products={products} />{/*le pasamos a ItemList el array de productos ya sean filtrados por categoria o no */}
//         </div>
//     )
// }

export default ItemListContainer