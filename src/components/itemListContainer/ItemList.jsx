import Item from "./Item";
import { aMayusculas } from "../../auxiliares/correccionesStrings";

const ItemList = ({productos, tituloCategoria}) => {
    return (
            <div className="contenido-tienda">
                <h2>{aMayusculas(tituloCategoria)}</h2>
                {productos.map((prod) => 
                    <Item producto={prod} key={prod.id}/>
                    )
                }
            </div>
    )
}

export default ItemList