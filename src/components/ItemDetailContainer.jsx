import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import productos from '../json/productos.json'; 

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      setTimeout(() => {
        try {
          // Busca el producto en el JSON x id
          const foundProduct = productos.find(producto => producto.id === parseInt(itemId));
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError(new Error('Producto no encontrado'));
          }
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }, 2000);
    };
  
    fetchProduct();
  }, [itemId]);

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
      <p>{product.description}</p>
 
    </div>
  );
};

export default ItemDetailContainer;
