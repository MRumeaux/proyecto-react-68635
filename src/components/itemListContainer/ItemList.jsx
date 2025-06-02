import Item from "./Item"
import { aMayusculas } from "../../auxiliares/correccionesStrings";

const ItemList = ({productos, tituloCategoria}) => {
    return (
            <div className="posicion-contenedor">
                <h2>{aMayusculas(tituloCategoria)}</h2>
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