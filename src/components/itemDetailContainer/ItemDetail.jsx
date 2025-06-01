

const ItemDetail = ({item}) => {
    return (
        <div className="contenido-descripcion">
            <div className="detalle-producto">
                <img src={item.img} alt={item.nombre_producto} />
                <div className="alinear-detalle">
                    <h3 className="titulo">{item.nombre_producto}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {item.categoria}</p>
                    <p className="precio-producto">${item.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail