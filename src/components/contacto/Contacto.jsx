import { useForm } from "react-hook-form"

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    return (
        <div className="posicion-contenedor ">
            <div className="contenido-tienda">
                <h1 className="titulo-principal">Ingresá tus datos de contacto</h1>
                <form className="form" onSubmit={handleSubmit(enviarForm)}>

                    <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                    <input type="email" placeholder="Ingresá tu email" {...register("email")} />
                    <input type="phone" placeholder="Ingresá tu número de teléfono" {...register("telefono")} />

                    <button type="submit" className="envio-form">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto