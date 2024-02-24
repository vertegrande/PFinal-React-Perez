import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext';  

const Item = ({ id, nombre, imagen, precio, docId }) => {
  const { addItem } = useContext(CartContext); 

  const handleClick = () => {
    console.log("ID del producto:", id);
    console.log("Nombre del producto:", nombre);  
    addItem({ id, nombre, imagen, precio }, 1);  
  };

  return (
    <div className="col-md-3">
      <div className="card mb-1 border-0 mb-4">
        <Link to={`/item/${id}`}>
          <img src={imagen} className="img-fluid" alt={nombre} />
          <div className="card-body">
            <p className="badge rounded-0 bg-warning border-bottom ">${precio}</p>
            <h6 className=" border-top pt-4 fw-bold link-dark">{nombre}</h6>
            <small className="link-dark">SKU: {id}</small>
           </div>
        </Link>
        <button className="btn btn-dark rounded-0" onClick={handleClick}>Agregar al carrito</button> 
       </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  docId: PropTypes.string.isRequired // Propiedad para el Document ID
};

export default Item;
