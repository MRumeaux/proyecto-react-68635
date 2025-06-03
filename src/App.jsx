import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/header/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/contacto/Contacto';
import { useState } from 'react';
import { CartContext } from './context/CartContext';
import Cart from './components/cartApp/Cart';

function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {

        const actualizoCarrito = [...carrito];
        const itemAgregado = {...item, cantidad};
        const validarCarrito = actualizoCarrito.find((producto) => producto.id === itemAgregado.id);

        if(validarCarrito) {
            validarCarrito.cantidad += cantidad;
        }else{
            actualizoCarrito.push(itemAgregado);
        }
        setCarrito(actualizoCarrito);
    }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCart = () => {
    setCarrito([]);
  }

  return (
    <div>
      <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCart}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos/" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/carrito" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}

export default App
