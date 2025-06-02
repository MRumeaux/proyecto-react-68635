import { useEffect } from "react"


const EjemploEventos = () => {
    useEffect(() => {
        
        const clickear = () => {
            console.log("Click");
        }

        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)
            }

    }, [])
    
    

    return (
        <div>CodigoAUtilizar</div>
    )
}

export default EjemploEventos