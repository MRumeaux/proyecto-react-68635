import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";


const Cart = () => {
    const {carrito, precioTotal, vaciarCart} = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCart()
    }

    return (
        <div className="alinear-detalle">
            <h1>Carrito</h1>
            {carrito.map((prod) => (
                    <div className="prod-cart" key={prod.id}>
                        <img src={prod.img} alt={prod.nombre_producto} />
                        <div>
                            <h3>{prod.nombre_producto}</h3>
                            <p>Precio unitario: ${prod.precio}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                            <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        </div>
                        <br/>
                    </div>

                ))
            }
            {carrito.length > 0 ? <>
                            <h2>Precio total: ${precioTotal()}</h2> 
                            <button onClick={handleVaciar}>Vaciar carrito</button>
                            <button><Link to="/checkout">Finalizar compra</Link></button>
                            </> 
                            : <h2>El carrito está vacío, agregue productos.</h2>}
        </div>
    )
}

export default Cart