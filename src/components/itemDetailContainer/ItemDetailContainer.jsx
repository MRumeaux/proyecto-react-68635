import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const id = useParams().id;


    useEffect(() => {
        const docuRef = doc(db, "productos", id);
        getDoc(docuRef)
            .then((res) => {
                setItem({...res.data(), id: res.id});
            })
        }, [id])
    

    return (
        <div>
            { item && <ItemDetail item={item}/> }
        </div>
    )
}

export default ItemDetailContainer