// import logo from './logo.svg';
import { CartProvider } from './Context/CartContext';
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount.js';
// import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart.js/Cart';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { db } from './services/firebase/firebaseConfig';
// import { Checkbox } from '@chakra-ui/react';
import Checkout from './components/Checkout/Checkout';
// console.log(db)


function App() {
  return (
    
    <div className="App">
      <CartProvider>
         {/* dejo q el contexto sea global para todos los componentes */}
       <BrowserRouter>{/*todos los componentes q no van a variar sin importar la seccion de la pagina*/}
          <NavBar/>
          <Routes>{/*todos los componentes q segun la URL/seccion de la pagina si van a variar y cambiar */}
            <Route path='/' element={<ItemListContainer greeting='Todos nuestro products'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
         
        </BrowserRouter>
    </CartProvider>
      
    </div>
    
  );
}

export default App;
