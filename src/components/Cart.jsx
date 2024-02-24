import { useContext } from 'react';
import { CartContext } from './CartContext'; 

const Cart = () => {
  const { cart, removeItem, clear, sumaTotalProductos } = useContext(CartContext);

  return (
    <div className="container bg-light mt-5 p-4">
      <div className="row">
        <div className="col-md-8">
          <h6>Productos en el Carrito</h6>
          <table className="table">
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="align-middle">
                    <img src={item.imagen} alt={item.nombre} width="80" />
                  </td>
                  <td className="text-start align-middle">{item.nombre}</td>
                  <td className="text-start align-middle">${item.precio}</td>
                  <td className="text-start align-middle">{item.cantidad}</td>
                  <td className="text-start align-middle">${item.cantidad * item.precio}</td>
                  <td className="text-end align-middle">
                    <button className="btn btn-secondary btn-sm rounded-0" onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash-can"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="my-4 btn btn-dark btn-sm rounded-0" onClick={clear}>Vaciar Carrito</button>
        </div>
        <div className="col-md-4 p-4">
          <div className="card p-4 rounded-0">
            <h4>Total</h4>
            <p>Total a pagar: ${sumaTotalProductos()}</p>
            <a className="btn bg-warning rounded-0" href="/checkout">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
