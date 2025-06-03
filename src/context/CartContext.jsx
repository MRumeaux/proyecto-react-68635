import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {

        const actualizoCarrito = [...carrito];
        const itemAgregado = {...item, cantidad};
        const validarCarrito = actualizoCarrito.find((producto) => producto.id === itemAgregado.id);

        {validarCarrito ? validarCarrito.cantidad += cantidad : actualizoCarrito.push(itemAgregado)}
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
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCart}}>
            {children}
        </CartContext.Provider>
    )
}