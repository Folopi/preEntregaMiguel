// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount.js';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
 


  return (
    
    <div className="App">
       <BrowserRouter>
          <NavBar producto="guitarra"/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Todos nuestro products'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
    
      
    </div>
    
  );
}

export default App;
