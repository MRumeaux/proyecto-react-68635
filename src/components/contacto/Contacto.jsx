import { useState } from "react";


const Contacto = () => {

    const [usuario, setUsuario] = useState({
        nombre: "",
        email: ""
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log("Enviado", usuario)
    }

    const handleUsuario = (ev) => {
        setUsuario({
            ...usuario, 
            [ev.target.name]: ev.target.value
        })
    }


    return (
        <div className="posicion-contenedor ">
            <div className="contenido-tienda">
                <h1 className="titulo-principal">Ingresá tus datos</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ingresá tu nombre" value={usuario.nombre} onChange={handleUsuario} name="nombre"/>
                    <input type="email" placeholder="Ingresá tu email" value={usuario.email} onChange={handleUsuario} name="email"/>
                    <button type="submit" className="envio-form">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto