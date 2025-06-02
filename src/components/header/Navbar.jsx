import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div className="nav-contenedor">
            <nav className="navbar">
                <Link className="nav-logo" to="/"><h1>Ama tu piel</h1></Link>
                <ul className="menu">
                    <li><Link to="/productos">Nuestros productos</Link></li>
                    <li><Link to="/productos/corporal">Productos Corporales</Link></li>
                    <li><Link to="/productos/facial">Productos Faciales</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default Navbar;