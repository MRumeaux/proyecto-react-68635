import { useEffect, useState } from "react"
import { pedirProductos } from "../../auxiliares/importsAuxiliares"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [tituloCategoria, setTituloCategoria] = useState("Productos")
    const categoria = useParams().categoria;

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(categoria ? res.filter((producto) => producto.categoria === categoria) : res);
                setTituloCategoria(categoria ? categoria : "Productos");
            })
    }, [categoria])
    
    return (
        <div>
            <ItemList productos={productos} tituloCategoria={tituloCategoria}/>
        </div>
    )
}

export default ItemListContainer