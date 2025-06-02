import { Link } from "react-router-dom"


const Item = ({producto}) => {

    return (
        <div className="preview-articulo">
            <img src={producto.img} alt={producto.nombre_producto}/>
            <h2>{producto.nombre_producto}</h2>
            <p className="precio-producto">{producto.precio}</p>
            <Link className="boton-descripcion-y-carrito" to={`/producto/${producto.id}`}>Ver más detalles</Link>
        </div>
    )
}

export default Item


