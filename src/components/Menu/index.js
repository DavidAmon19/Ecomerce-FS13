import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

export default function Menu() {
    const url = useLocation();

    const isActive = (path) => {
        if (path === "/produtos" || path === "/produtos/tênis/nike") {
            return(url.pathname.includes("/produtos") ? "active" : "");
        }
        return (path === url.pathname) ? "active" : "";
        
    }

    return (
        <div className="menu" style={{backgroundColor:"#FFFFFF"}}>
            <Link className={isActive('/')} to="/">Inicio</Link>
            <Link className={isActive('/produtos')} to="/produtos">Produtos</Link>
            <Link className={isActive('/categorias')} to="/categorias">Categorias</Link>
            <Link className={isActive("/meus-pedidos")} to="/meus-pedidos">Meus Pedidos</Link>
            
        </div>
    )
}
