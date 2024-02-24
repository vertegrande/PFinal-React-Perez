import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const Category = () => {
  const { category } = useParams();  
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
         setFilteredItems([]);

        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        const categoryQuery = query(itemsCollection, where('categoria', '==', category));
        const querySnapshot = await getDocs(categoryQuery);

        const filtered = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFilteredItems(filtered);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, [category]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <section className='bg-warning'>
        <h2 className='container py-3 display-6 text-uppercase text-black-50'>{category}</h2>
      </section>
      <ItemList productos={filteredItems} />
    </div>
  );
};

export default Category;
