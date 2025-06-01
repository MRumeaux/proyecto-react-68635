import { useEffect, useState } from "react"
import { pedirProductosPorId } from "../../importsAuxiliares"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({itemId}) => {
    const [item, setItem] = useState(null)

    useEffect(() => {
        pedirProductosPorId(itemId)
            .then((res) => {
                setItem(res)
            })
    }, [itemId])
    

    return (
        <div>
            { item && <ItemDetail item={item}/> }
        </div>
    )
}

export default ItemDetailContainer