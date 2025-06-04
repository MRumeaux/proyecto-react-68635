import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {

    const {carrito, precioTotal, vaciarCart} = useContext(CartContext);
    const {register, handleSubmit} = useForm();
    const [pedidoId, setPedidoId] = useState("");
    
    const compraForm = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            totalCarrito: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => { 
                setPedidoId(doc.id);
                vaciarCart();
            })
        
    }

    if (pedidoId) {
        return (
            <div className="prod-cart">
                <h1 className="titulo-principal">¡Compra realizada con éxito!</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="posicion-contenedor ">
            <div className="contenido-tienda">
                <h1 className="titulo-principal">Para finalizar la compra te pediremos que completes tus datos de contacto</h1>
                <form className="form" onSubmit={handleSubmit(compraForm)}>

                    <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                    <input type="email" placeholder="Ingresá tu email" {...register("email")} />
                    <input type="phone" placeholder="Ingresá tu número de teléfono" {...register("telefono")} />

                    <button type="submit" className="envio-form">Confirmar y comprar ahora</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout