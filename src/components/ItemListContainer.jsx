import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import arrayProductos from '../json/productos.json';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState('');

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

  const handleFiltroChange = (e) => {
    setFiltroCategoria(e.target.value);
  };

  let productosFiltrados = productos;
  if (filtroCategoria) {
    productosFiltrados = productos.filter(producto => producto.categoria === filtroCategoria);
  }

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <label htmlFor="filtroCategoria">Filtrar por categoría:</label>
        <select id="filtroCategoria" value={filtroCategoria} onChange={handleFiltroChange}>
          <option value="">Todos</option>
          <option value="materos">Termos y Mates</option>
          <option value="buzos">Buzos</option>
          <option value="remeras">Remeras</option>
          <option value="camisas">Camisas</option>
          <option value="sombreros">Sombreros</option>
        </select>
      </div>
      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;
