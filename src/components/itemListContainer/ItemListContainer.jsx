import { useEffect, useState } from "react"
import { pedirProductos } from "../../importsAuxiliares"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
    }, [])
    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer