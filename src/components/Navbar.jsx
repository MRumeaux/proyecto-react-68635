
const Navbar = () => {
    return (
        <div className="nav-contenedor">
            <nav className="navbar">
                <a href="#" className="nav-logo"><h1>Ama tu piel</h1></a>
                <ul className="menu">
                    <li><a className="link-menu" href="#">Nuestros productos</a></li>
                    <li><a className="link-menu" href="#">Productos Corporales</a></li>
                    <li><a className="link-menu" href="#">Productos Faciales</a></li>
                    <li><a className="link-menu" href="#">Marcas</a></li>
                    <li><a className="link-menu" href="#">Tips</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;