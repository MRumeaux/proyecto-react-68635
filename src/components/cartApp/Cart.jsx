import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {
    const {carrito} = useContext(CartContext);

    return (
        <div>
            <h1>Carrito</h1>
            {carrito.map((prod) => {
                <h2>{prod.nombre_producto}</h2>
            })}
        </div>
    )
}

export default Cart