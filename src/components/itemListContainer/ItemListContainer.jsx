import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
        const prodsRef = collection(db, "productos");
        const busqueda = categoria ? query(prodsRef, where("categoria", "==", categoria)) : prodsRef;
        getDocs(busqueda)
            .then((res) => {
                setProductos(
                    res.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
                )
            })
    }, [categoria])
    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer