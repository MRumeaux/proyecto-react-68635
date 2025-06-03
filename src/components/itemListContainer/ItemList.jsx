import Item from "./Item"

const ItemList = ({productos}) => {
    return (
            <div className="posicion-contenedor">
                <div className="contenido-tienda">
                    {productos.map((prod) => 
                        <Item producto={prod} key={prod.id}/>
                        )
                    }
                </div>
            </div>
    )
}

export default ItemList