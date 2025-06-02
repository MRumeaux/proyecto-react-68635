import { useEffect, useState } from "react"
import { pedirProductosPorId } from "../../auxiliares/importsAuxiliares"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Cargando from "../cargando/Cargando"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [cargando, setCargando] = useState(true)
    const id = useParams().id;


    useEffect(() => {
        pedirProductosPorId(Number(id))
            .then((res) => {
                setItem(res)
                setTimeout(() => {
                    setCargando(false)
                }, 500)
            })
    }, [id])
    

    return (
        <div>
            { cargando ? <Cargando/> : <ItemDetail item={item}/> }
        </div>
    )
}

export default ItemDetailContainer