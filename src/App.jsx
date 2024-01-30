import {  } from 'react'
import './App.css'
import Buscador from './components/Buscador'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';
 
const App = () => {
  return (
    <div>
      <NavBar />
      <Buscador />
    
      <ItemListContainer />
      
      <Footer />
    </div>
  );
};

export default App;
