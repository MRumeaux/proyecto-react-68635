

const Item = ({producto}) => {

    return (
        <div className="preview-articulo">
            <img src={producto.img} alt={producto.nombre_producto}/>
            <h2>{producto.nombre_producto}</h2>
            <p className="precio-producto">{producto.precio}</p>
            <button className="sumar-al-carrito">Agregar al carrito</button>
        </div>
    )
}

export default Item


