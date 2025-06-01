import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div className="contenido-tienda">
            {productos.map((prod) => 
                <Item producto={prod} key={prod.id}/>
                )
            }
        </div>
    )
}

export default ItemList