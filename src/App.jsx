import './App.css'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <ItemListContainer/>
        <ItemDetailContainer itemId={2}/>
      </div>
    </>
  )
}

export default App
