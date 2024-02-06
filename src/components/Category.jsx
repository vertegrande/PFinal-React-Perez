import   { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import productos from '../json/productos.json';

const Category = () => {
  const { category } = useParams(); // Obtener la categoría de los parámetros de la URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filtrar los productos basándose en la categoría seleccionada
    const filtered = productos.filter(producto => producto.categoria === category);
    setFilteredProducts(filtered);
  }, [category]); // Ejecutar efecto cuando cambie la categoría

  return (
    <div>
      <h2>{category}</h2>
      <ItemList productos={filteredProducts} />
    </div>
  );
};

export default Category;
