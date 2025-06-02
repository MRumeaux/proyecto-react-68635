
const ItemCount = ({cantidad, handleSumar, handleRestar, handleAgregarCart}) => {
    
    return (
        <div>
            <div className="contador-item">
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="boton-descripcion-y-carrito" onClick={handleAgregarCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount