import   { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Item from './Item';
import CartContextProvider from './CartContext';  

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const querySnapshot = await getDocs(itemsCollection);

        const productosData = querySnapshot.docs.map(doc => doc.data());
        setProductos(productosData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <CartContextProvider>
      <div className="container mt-3">
        <div className="row">
          {productos.map(producto => (
            <Item
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              descripcion={producto.descripcion}
              id={producto.id}
            />
          ))}
        </div>
      </div>
    </CartContextProvider>
  );
};

export default ItemListContainer;
