import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Buscador from './components/Buscador';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Category from './components/Category';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';



const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Buscador />
        <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
