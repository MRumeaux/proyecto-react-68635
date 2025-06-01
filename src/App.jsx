import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/header/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos/" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
