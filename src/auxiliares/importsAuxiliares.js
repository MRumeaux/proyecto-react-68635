import data from '../data/data.json'

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}

export const pedirProductosPorId = (id) => {
    return new Promise ((resolve, reject) => {
        const productoDetalle = data.find((prod) => prod.id === id)
        if(productoDetalle) {
            resolve(productoDetalle)
        } else{
            reject({
                error: "Error al cargar el detalle del producto"
            })
        }
        }
    )
}