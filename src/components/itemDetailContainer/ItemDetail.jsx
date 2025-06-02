import { useState } from "react"
import ItemCount from "../itemCount/ItemCount"


const ItemDetail = ({item}) => {
    
    const [cantidad, setCantidad] = useState(1)

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleAgregarCart = () => {
        console.log({...item, cantidad})
    }

    return (
        <div className="contenido-descripcion">
            <div className="detalle-producto">
                <img src={item.img} alt={item.nombre_producto} />
                <div className="alinear-detalle">
                    <h3 className="titulo">{item.nombre_producto}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {item.categoria}</p>
                    <p className="precio-producto">${item.precio}</p>
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregarCart={handleAgregarCart}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail