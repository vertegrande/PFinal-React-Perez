import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import productos from '../json/productos.json'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        // Simular una carga asíncrona
        setTimeout(() => {
          // Buscar el producto en el JSON por id
          const foundProduct = productos.find(producto => producto.id === parseInt(id));
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError(new Error('Producto no encontrado'));
          }
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Item
        id={product.id}
        nombre={product.nombre}
        imagen={product.imagen}
        precio={product.precio}
      />
      <p>{product.descripcion}</p>  
    </div>
  );
};

export default ItemDetailContainer;
