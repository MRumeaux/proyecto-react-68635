

const Item = ({producto}) => {
    return (
        <div>
            <img src={producto.img}/>
            <h2 key={producto.id}>{producto.nombre_producto}</h2>
            <p className="precio-producto">{producto.precio}</p>
            <button className="sumar-al-carrito">Sumar al Carrito</button>
        </div>
    )
}

export default Item


