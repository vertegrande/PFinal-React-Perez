import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex((product) => product.id === item.id);
            cart[pos].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad: cantidad }]);
        }
    };

    const removeItem = (id) => {
        const items = cart.filter((product) => product.id != id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const cantTotalProductos = () => {
        return cart.reduce((acum, product) => (acum += product.cantidad), 0);
    };

    const sumaTotalProductos = () => {
        return cart.reduce(
            (acum, product) => (acum += product.cantidad * product.precio),
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                cantTotalProductos,
                sumaTotalProductos,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
CartContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartContextProvider;