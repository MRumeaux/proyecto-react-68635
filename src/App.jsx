import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/header/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cartApp/Cart';
import Checkout from './components/cartApp/Checkout';

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos/" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
