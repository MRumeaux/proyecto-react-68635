import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, writeBatch } from "firebase/firestore";
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

        const actualizarStock = async (pedido) => {
            const batch = writeBatch(db);
            batch.set(pedidosRef, pedido);
            pedido.productos.forEach(prod => {
                const producto = doc(db, "productos", prod.id)
                batch.update(producto, {stock: producto.stock - producto.cantidad})
                });
            await batch.commit();
        }

        addDoc(pedidosRef, pedido)
            .then((doc) => { 
                setPedidoId(doc.id);
                actualizarStock();
                vaciarCart();
            })
        
    }

    if (pedidoId) {
        return (
            <div className="contenido-tienda">
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