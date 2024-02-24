import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';

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

        const productosData = querySnapshot.docs.map(doc => {
          // Agregar el Document ID al objeto de datos
          return { id: doc.id, ...doc.data() };
        });
        
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
    <div>
         <section className='bg-warning'>
        <h2 className='container py-3 display-6 text-uppercase text-black-50'>Lista de Productos</h2>
      </section>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
