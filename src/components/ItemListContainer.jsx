import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import arrayProductos from '../json/productos.json';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchProductos = () => {
      // Simular una llamada a una API con retardo
      setTimeout(() => {
        try {
          setProductos(arrayProductos);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }, 2000);
    };

    fetchProductos();
  }, []);

 
  let productosFiltrados = productos;
 

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;
