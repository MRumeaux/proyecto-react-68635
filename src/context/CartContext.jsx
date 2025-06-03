import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const cartInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState(cartInicial);

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

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCart}}>
            {children}
        </CartContext.Provider>
    )
}