import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cantTotalProductos } = useContext(CartContext);

    const handleClick = (e) => {
        if (cantTotalProductos() === 0) {
            e.preventDefault(); // Evita la navegación predeterminada si no hay productos en el carrito
        }
    };

    return (
        <Link to={"/cart"} className="position-relative" onClick={handleClick}>
            <span>
                {cantTotalProductos() > 0 ? cantTotalProductos() : "0"}
            </span>
        </Link>
    );
};

export default CartWidget;
