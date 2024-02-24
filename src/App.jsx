import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Buscador from './components/Buscador';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Category from './components/Category';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart'; // Importa el componente Cart

const App = () => {
  return (
    <Router>
      <CartContextProvider>
        <div>
          <NavBar />
          <Buscador />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} /> {/* Aquí corregido */}
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </Router>
  );
};

export default App;
